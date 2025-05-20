import { cookieOptions } from "../config/config.js";
import { findUserByEmail, saveUser } from "../dao/user.dao.js";
import { BadRequestError, ConflictError, UnauthorizedError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";
import bcrypt from "bcrypt";


export const register = async (req, res, next) => {
   const { name, email, password } = req.body;

   if (!name || !email || !password) {
      return next(new BadRequestError("All fields are required"));
   }

   try {
      const existingUser = await findUserByEmail(email);

      if (existingUser) {
         throw new ConflictError("User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await saveUser(name, email, hashedPassword);

      const token = signToken({ userId: user._id });

      // ✅ Set as HTTP-only cookie
      res.cookie("accessToken", token, cookieOptions);

      res.status(201).json({
         user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
         },
         success: true,
         message: "User registered successfully"
      });

   } catch (error) {
      next(error);
   }
};


export const login = async (req, res, next) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return next(new BadRequestError("Email and password are required"));
   }

   try {
      const user = await findUserByEmail(email);

      // 2. Check if user exists
      if (!user) {
         throw new UnauthorizedError("Invalid credentials");
      }

      // 3. Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         throw new UnauthorizedError("Invalid credentials");
      }

      const token = signToken({ userId: user._id });

      // ✅ Set as HTTP-only cookie
      res.cookie("accessToken", token, cookieOptions);

      res.status(200).json({
         user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
         },
         success: true,
         message: "Login successful",
      });

   } catch (error) {
      next(error);
   }
};

export const logout = async (req, res, next) => {
   try {
      res.clearCookie("token");
      res.status(200).json({
         success: true,
         message: "Logout successful",
      });
   } catch (error) {
      next(error);
   }
}
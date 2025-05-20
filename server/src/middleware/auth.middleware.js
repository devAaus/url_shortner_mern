import { findUserById } from "../dao/user.dao.js";
import { UnauthorizedError } from "../utils/errorHandler.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
   const token = req.cookies.accessToken;
   console.log("Token: ", token);


   if (!token) {
      return next(new UnauthorizedError("Unauthorized: No token provided"));
   }

   try {
      const decoded = verifyToken(token);

      if (!decoded?.userId) {
         return next(new UnauthorizedError("Unauthorized: Invalid token payload"));
      }

      const user = await findUserById(decoded.userId);
      if (!user) {
         return next(new UnauthorizedError("Unauthorized: User not found"));
      }

      req.user = user;
      next();

   } catch (error) {
      return next(new UnauthorizedError("Unauthorized: Token verification failed"));
   }
};

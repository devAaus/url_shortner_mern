import Url from "../models/url.model.js";
import User from "../models/user.model.js"

export const findUserByEmail = async (email) => {
   return await User.findOne({ email });
}

export const findUserById = async (id) => {
   return await User.findById(id);
}

export const saveUser = async (name, email, password) => {
   const user = new User({
      name, email, password
   });
   return await user.save();
}

export const getUserUrls = async (userId) => {
   return await Url.find({ user: userId }).sort({ createdAt: -1 })
}
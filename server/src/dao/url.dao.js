import { nanoid } from "nanoid";
import Url from "../models/url.model.js";
import { BadRequestError, NotFoundError } from "../utils/errorHandler.js";

export const saveUrl = async (originalUrl, userId) => {
   const shortUrl = nanoid(7);

   try {
      const data = new Url({
         originalUrl,
         shortUrl,
         ...(userId && { user: userId })
      });

      await data.save();
      return data;
   } catch (error) {
      throw new BadRequestError(error.message || "Failed to save URL");
   }
}

export const getUrlByShortUrl = async (shortUrl) => {
   const url = await Url.findOneAndUpdate(
      { shortUrl },
      { $inc: { clicks: 1 } },
      { new: true }
   );

   if (!url) {
      throw new NotFoundError("Short URL not found");
   }

   return url;
}
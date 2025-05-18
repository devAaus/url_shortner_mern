import { nanoid } from "nanoid";
import Url from "../models/url.model.js";

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
      console.error("Error saving URL:", error);
      throw new Error("Failed to save URL");
   }
}

export const getUrlByShortUrl = async (shortUrl) => {
   const url = await Url.findOneAndUpdate(
      { shortUrl },
      { $inc: { clicks: 1 } },
   );
   return url;
}
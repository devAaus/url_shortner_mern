import { getUrlByShortUrl, saveUrl } from "../dao/url.dao.js";
import { BadRequestError } from "../utils/errorHandler.js";


export const createShortUrl = async (req, res, next) => {
   const { url } = req.body;

   if (!url) {
      throw new BadRequestError("URL is required");
   }

   try {
      const userId = req.user._id;

      const data = await saveUrl(url, userId);
      const shortUrl = `${process.env.APP_URL}/${data.shortUrl}`;

      res.status(201).json({
         success: true,
         message: "Short URL created successfully",
         shortUrl
      });

   } catch (error) {
      next(error);
   }
};


export const redirectShortUrl = async (req, res, next) => {
   try {
      const { id } = req.params;
      const url = await getUrlByShortUrl(id);

      res.redirect(url.originalUrl);
   } catch (error) {
      next(error);
   }
}

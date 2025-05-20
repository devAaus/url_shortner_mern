import { getUserUrls } from "../dao/user.dao.js";
import { UnauthorizedError, NotFoundError } from "../utils/errorHandler.js";

export const getAllUrls = async (req, res, next) => {
   try {
      if (!req.user || !req.user._id) {
         return next(new UnauthorizedError("Unauthorized: User not found"));
      }

      const urls = await getUserUrls(req.user._id);

      if (!urls || urls.length === 0) {
         return next(new NotFoundError("No URLs found"));
      }

      res.status(200).json({
         success: true,
         urls,
         message: "URLs retrieved successfully",
      });

   } catch (error) {
      next(error);
   }
};

export const getUrlStats = async (req, res, next) => {
   try {
      if (!req.user || !req.user._id) {
         return next(new UnauthorizedError("Unauthorized: User not found"));
      }

      const urls = await getUserUrls(req.user._id);

      if (!urls || urls.length === 0) {
         return next(new NotFoundError("No URLs found"));
      }

      const totalUrls = urls.length;
      const totalClicks = urls.reduce((sum, url) => sum + (url.clicks || 0), 0);

      res.status(200).json({
         success: true,
         totalUrls,
         totalClicks,
         message: "URL stats retrieved successfully",
      });

   } catch (error) {
      next(error);
   }
}

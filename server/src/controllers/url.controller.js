import { getUrlByShortUrl, saveUrl } from "../dao/url.dao.js";


export const createShortUrl = async (req, res) => {
   const { url } = req.body;

   if (!url) {
      return res.status(400).json({
         message: "URL is required"
      });
   }

   try {
      const data = await saveUrl(url);

      const shortUrl = `${process.env.APP_URL}/${data.shortUrl}`;

      res.status(201).json({
         shortUrl
      });

   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating short URL" });
   }
};

export const redirectShortUrl = async (req, res) => {
   const { id } = req.params;
   const url = await getUrlByShortUrl(id);
   if (!url) {
      return res.status(404).json({
         message: "URL not found"
      });
   }
   res.redirect(url.originalUrl);
}

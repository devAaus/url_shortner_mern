import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
   originalUrl: {
      type: String,
      required: true,
   },
   shortUrl: {
      type: String,
      required: true,
      index: true,
      unique: true,
   },
   clicks: {
      type: Number,
      required: true,
      default: 0,
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);

export default Url;
import mongoose, { Schema, Document } from "mongoose";
export type ObjectIdType = mongoose.Schema.Types.ObjectId;

const scrapedDataSchema = new mongoose.Schema({
  url: String,
  title: String,
  heading: String,
  category: String,
});

const Scrape =
  mongoose.models.Scrape || mongoose.model("Scrape", scrapedDataSchema);

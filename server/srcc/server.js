import express from "express";
import { scrapeData } from "./scrape.js";
// import { Scrape } from "./db/schema.db";
// import { connectToDB } from "./db/connect.db";
import { classifyText } from "./classify.js";

const port = 3000;
const app = express();
app.use(express.json());
// connectToDB();

// Route to receive the URL from the frontend
app.post("/scrape", async (req, res) => {
  console.log("/scrape was hit");
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ error: "URL is required" });
  }

  console.log("url: ", url);
  try {
    // Scrape the data
    const scrapedContent = await scrapeData(url);

    const category = classifyText(scrapedContent.heading);

    console.log(category);
    // const scrapedData = new Scrape({
    //   url,
    //   title: scrapedContent.title,
    //   heading: scrapedContent.heading,
    //   content: scrapedContent.content,
    //   category,
    // });

    // await scrapedData.save();
    res.status(500).send({ message: category });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

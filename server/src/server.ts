import express, { Application, Request, Response } from "express";
import { scrapeData } from "./actions";

const port: number = 3000;
const app: Application = express();
app.use(express.json());

// Route to receive the URL from the frontend
app.post("/scrape", async (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ error: "URL is required" });
  }

  try {
    // Scrape the data
    const data = await scrapeData(url);
    res.send(data);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

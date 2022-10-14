import { getNewsArticles, reloadNewsArticles } from "@data";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const newsArticles = await getNewsArticles();
    res.status(200).json(newsArticles);
  }
  if (req.method === "POST") {
    const newsArticles = await reloadNewsArticles();
    res.status(200).json(newsArticles);
  }
  res.status(404);
};

export default handler;

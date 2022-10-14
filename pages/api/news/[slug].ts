import { deleteNewsArticles, getNewsArticles } from "@data";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { slug } = req.query;
    if (!slug) {
      res.status(400);
    } else {
      deleteNewsArticles(slug as string);
      res.status(200).json(await getNewsArticles());
    }
  }
  res.status(404);
};

export default handler;

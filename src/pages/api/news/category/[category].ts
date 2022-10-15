import { deleteNewsArticlesByCategory, getNewsArticles } from "@data";
import { CategoryType } from "@utils";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { category } = req.query;
    if (!category) {
      res.status(400);
    } else {
      deleteNewsArticlesByCategory(category as CategoryType);
      res.status(200).json(await getNewsArticles());
    }
  }
  res.status(404);
};

export default handler;

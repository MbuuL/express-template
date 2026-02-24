import { Request, Response } from "express";

const version = process.env.VERSION || "1.0.0";

export const getHealth = (req: Request, res: Response) => {
  res.json({ status: "ok" });
};

export const getVersion = (req: Request, res: Response) => {
  res.json({ version });
};

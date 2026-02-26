import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db";
import { users } from "../db/schema";

export const register = async (req: Request, res: Response) => {
  const { username, password }: RegisterPayload = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const [isUsersExist] = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    if (isUsersExist) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await db.insert(users).values({ username, password: hashPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("register error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password, rememberMe }: LoginPayload = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: rememberMe ? "7d" : "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("login error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

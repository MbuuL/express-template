// V1
import { Router, type Router as RouterType } from "express";
import { getHealth, getVersion } from "./controllers/misc";
import { register, login } from "./controllers/auth";

const router: RouterType = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
router.get("/health", getHealth);
router.get("/version", getVersion);
router.post("/auth/register", register);
router.post("/auth/login", login);

export default router;

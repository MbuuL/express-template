// V1
import { Router, type Router as RouterType } from "express";
import { getHealth, getVersion } from "./controllers/misc";

const router: RouterType = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
router.get("/health", getHealth);
router.get("/version", getVersion);

export default router;

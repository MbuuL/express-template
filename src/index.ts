import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import router from "./router";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

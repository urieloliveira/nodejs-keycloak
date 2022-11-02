import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Hello!");
});

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port ${process.env.API_PORT}`);
});

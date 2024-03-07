import express from "express";
import cors from "cors";
import { routesDogs } from "./routes/dogs";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routesDogs);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });

import app from "./app.js";

dotenv.config();

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

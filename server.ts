import app from "./src/app";
import dotenv from "dotenv";
import { connectMongo } from "./src/config/database";

dotenv.config();

const PORT = process.env.PORT;

(async () => {
  try {
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:", err);
    process.exit(1);
  }
})();

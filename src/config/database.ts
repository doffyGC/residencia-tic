import { MongoClient, Db, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI não definido no .env");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 10,
});

let dbRef: Db | null = null;

export async function connectMongo(): Promise<Db> {
  if (dbRef) return dbRef;

  await client.connect();
  dbRef = client.db(process.env.MONGODB_DB);

  await dbRef.command({ ping: 1 });
  console.log("✅ Conectado ao MongoDB Atlas");

  return dbRef;
}

export async function getDb(): Promise<Db> {
  if (!dbRef) return connectMongo();
  return dbRef;
}

export async function closeMongo(): Promise<void> {
  await client.close();
  dbRef = null;
}
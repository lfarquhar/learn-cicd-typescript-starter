import dotenv from "dotenv";
dotenv.config();

console.log("TWILIO " + process.env.TWILIO_API_KEY);
console.log("PORT " + process.env.PORT);

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

process.env.PORT = "8080";

export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};

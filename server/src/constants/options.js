import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const APP_ID = process.env.APP_ID;
const API_EXTERN_URL = process.env.API_EXTERN_URL;

export const options = {
  server: {
    port: PORT || 3000,
  },
  database: {
    mongoUrl: MONGO_URL,
  },
  token: {
    secretKey: SECRET_KEY,
  },
  api: {
    appId: APP_ID,
    urlApi: API_EXTERN_URL,
  },
};

import dotenv from "dotenv";
dotenv.config();

export const options = {
  app: {
    name: 'web-app',
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL
  },
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    mongoUrl: process.env.MONGO_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: '7d'
  },
  google: {
    clientIdGoogle:  process.env.GOOGLE_CLIENT_ID,
    secretGoogle: process.env.GOOGLE_CLIENT_SECRET,
    callbackGoogle: process.env.GOOGLE_CALLBACK_URL
  },
  api: {
    appId: process.env.APP_ID,
    urlApi: process.env.API_EXTERN_URL,
  },
};

import express from 'express';
import cors from 'cors';
import { DBconnect } from './Config/Database.js';

import AuthRoutes from './Routes/AuthRoutes.js'

const app = express();

app.use(express.json());

const corsOption = {
  credentials: true,
  origin: "http://localhost:5173",
  methods: ["POST","GET", "PUT", "DELETE"],
};

app.use(cors(corsOption));

app.use("/api/auth", AuthRoutes)

const PORT = 5000;

DBconnect().then(() =>{
  app.listen(PORT, () =>{
    console.log(`🚀 server running on ${PORT}`)
  });
});
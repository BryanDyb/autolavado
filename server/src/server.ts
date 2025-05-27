// src/server.ts
import express from "express";
import cors from "cors"; // 👈 importar CORS
import router from "./router";
import db from "./config/db";
const FRONDEND_URL = process.env.frontend_url || "http://localhost:3000";
const Server = express();



// 💥 Habilitar CORS para todas las rutas
Server.use(cors({
  origin: ['https://api-fullstack-1.onrender.com'], // 🔁 cambia esto por el dominio real de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

Server.use(express.json());

// Rutas
Server.use('/api/products', router);
Server.use('/api/clients', router);

// Conexión a base de datos
async function connectDB() {
    try {
        await db.authenticate();
        console.log("Conectado a la base de datos");

        await db.sync({ alter: true });
        console.log("Modelos sincronizados con la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
}

connectDB();

export default Server;

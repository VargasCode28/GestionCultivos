import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/db.js";
import cultivoRoutes from "./routes/cultivoRoutes.js";
import authRoutes from "./routes/authRoutes.js";



dotenv.config();
const app = express();





app.use(cors());
app.use(express.json());



app.use("/api/cultivos", cultivoRoutes);

app.use("/api/auth", authRoutes);






connectDB();


app.get("/",  (req, res) =>  {
    res.send("API Gestion de Cultivos funcionando");
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
import mongoose from "mongoose";

const cultivoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  fechaSiembra: { type: Date, required: true },
  estado: { type: String, enum: ["Activo", "Cosechado", "Preparación"], default: "Activo" },
  parcela: { type: String },
}, { timestamps: true });

export default mongoose.model("Cultivo", cultivoSchema);
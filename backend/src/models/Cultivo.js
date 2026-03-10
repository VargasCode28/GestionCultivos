import mongoose from "mongoose";

const cultivoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  fechaSiembra: { type: Date, required: true },
  estado: { type: String, enum: ["Activo", "Cosechado", "Preparación"], default: "Activo" },
  parcela: { type: String },
  usuario: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  //Ahora is hay relacion con usuario y guardado
  fechaCosecha: {type: Date}
}, { timestamps: true });

export default mongoose.model("Cultivo", cultivoSchema);
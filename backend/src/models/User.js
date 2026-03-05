import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // se guardará encriptada
  rol: { type: String, enum: ["admin", "user"], default: "user" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
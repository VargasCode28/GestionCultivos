
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB");

    const email = "admin@cultivos.com";
    const password = "admin123";
    const hashedPassword = await bcrypt.hash(password, 10);

    const adminExists = await User.findOne({ email });
    if (adminExists) {
      console.log("⚠️ El admin ya existe");
      process.exit();
    }

    const admin = new User({
      email,
      password: hashedPassword,
      rol: "admin",
    });

    await admin.save();
    console.log("✅ Admin creado:", admin.email);

    process.exit();
  } catch (error) {
    console.error("❌ Error al crear admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();
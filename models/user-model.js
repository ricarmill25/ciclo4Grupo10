const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    // name: { type: String, required: true },
    // time: { type: [String], required: true },
    // rating: { type: Number, required: false },

    cedula: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    celular: { type: Number, required: false },
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Consorcio = new Schema(
  {
    identificador: { type: Number, required: true },
    nombre: { type: String, required: true },
    fecha: { type: String, required: true },
    administrador: { type: String, required: true },
    departamento: { type: String, required: false  },
    ciudad: { type: String, required: true  },
    descripcion: { type: String, required: true },
  },
);

module.exports = mongoose.model("consorcio", Consorcio);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Peaje = new Schema(
  {
    identificador: { type: Number, required: true },
    peaje: { type: String, required: true },
    consorcio: { type: String, required: true },
    fecha: { type: String, required: true },
    encargado: { type: String, required: true },
    ciudad: { type: String, required: true },
    latitud: { type: Number, required: true },
    longitud:  { type: Number, required: true },
    ValorCatOne:  { type: Number, required: true },
    ValorCatTwo:  { type: Number, required: true },
    ValorCatThree:  { type: Number, required: true },
    ValorCatFour:  { type: Number, required: true },
  },
);

module.exports = mongoose.model("peajes", Peaje);

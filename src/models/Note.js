const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    facultad: {
      type: String, // Puedes cambiar el tipo según tus necesidades
      required: true,
    },
    carrera: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    subArea: {
      type: String,
      required: true,
    },
    tipoDocumento: {
      type: String,
      required: true,
    },
    subTipoDocumento: {
      type: String,
      required: true,
    },
    periodo: {
      type: String,
      required: true,
    },
    codigoCodificacion: {
      type: String,
      required: true,
      unique: true,
    },

    numPaginas: {
      type: Number,
      required: false,
    },
    asunto: {
      type: String,
      required: true,
    },
    observaciones: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", NoteSchema);
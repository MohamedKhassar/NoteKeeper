const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Create Note model
const Notes = mongoose.model("Note", noteSchema);
module.exports = Notes;

const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});
//.

// Create Note model
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;

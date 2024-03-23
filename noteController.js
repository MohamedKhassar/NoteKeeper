const Note = require("../Models/noteModel");

const createNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description,
    });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single note by ID
const getOne = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send({ message: "Note not found" });
    }
    res.send(note);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a note by ID
const EditNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );
    if (!note) {
      return res.status(404).send({ message: "Note not found" });
    }
    res.send(note);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Delete a note by ID
const DeleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).send({ message: "Note not found" });
    }
    res.send({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  createNote,
  getAll,
  getOne,
  EditNote,
  DeleteNote,
};

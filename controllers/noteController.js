/* eslint-disable no-unused-vars */
const Notes = require('../models/NoteModel')

const DataController = {

  getAll: async (req, res) => {
    try {
      const fetchedNotes = await Notes.find();
      res.status(200).json(fetchedNotes)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  },

  postData: async (req, res) => {
    try {
      const { title, description } = req.body
      const createNote = await Notes.create({ title, description })
      res.status(200).send(createNote)
    } catch (err) {
      console.log(`Error getting data ${err}`);
    }
  },

  updateData: async (req, res) => {
    try {
      const { id } = req.params
      const updateNote = await Notes.findByIdAndUpdate(id, req.body)
      res.status(200).json(updateNote)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  },

  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedNote = await Notes.findByIdAndDelete(id)
      res.status(200).json(deletedNote)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }
}

module.exports = DataController;

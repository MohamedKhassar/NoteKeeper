const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/", noteController.createNote);
router.get("/", noteController.getAll);
router.get("/:id", noteController.getOne);
router.put("/:id", noteController.EditNote);
router.delete("/:id", noteController.DeleteNote);

module.exports = router;

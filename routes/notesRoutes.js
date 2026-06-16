const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/notesController");
router.get("/",authMiddleware,getAllNotes);
router.get("/:id",authMiddleware,getNoteById);
router.post("/",authMiddleware,createNote);
router.put("/:id",authMiddleware,updateNote);
router.delete("/:id",authMiddleware,deleteNote);
module.exports = router;
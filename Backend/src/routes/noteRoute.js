import express from "express";
import { getAllnotes,getNoteById,createNote,updateNote,deleteNote} from "../controllers/noteControllers.js";

const router =express.Router();



router.get("/",getAllnotes);
router.get("/:id",getNoteById);

router.post("/",createNote);


router.put("/:id",updateNote);

 router.delete("/:id",deleteNote);
export default router;

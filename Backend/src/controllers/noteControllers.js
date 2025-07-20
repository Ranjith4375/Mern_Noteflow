import Note from "../models/Note.js"
export async function getAllnotes(_,res){
    try{

        const notes=await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    }
    catch(error){
        console.error("Error in the getAll Notes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function getNoteById(req,res){
    try{
        const note= await Note.findById(req.params.id);
        if(!note) return res.stattus(404).json({message:"Note found"});
       res.status(200).json(note);

    }
    catch(error){
console.log("Error in getNotesbyid controller",error);
res.status(500).json({message:"Internal server error"});
    }
}

export async function createNote(req,res){
    try{
        const {title,content}=req.body
        const newNote=new Note({title,content})
        await newNote.save()
        res.status(201).json({message:"Notes created successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});

    }
}



export async function updateNote(req,res){
   try{
        const {title,content}=req.body;

       const updateNote= await Note.findByIdAndUpdate(req.params.id,{title,content},
        {
            new:true,
        }
       )
       if(!updateNote){
        return res.status(404).json({message:"Note not found"})
       }
       res.status(200).json(updateNote);

   }
   catch(error){
    console.error("Error in updating ",error);
        res.status(500).json({meassage:"Internal Server error"})
   }
 }
 export async function deleteNote(req,res){
    try{
        const {title,content}=req.body;
        const deletedNote=await Note.findByIdAndDelete(req.params.id,{title,content})
        if(!deletedNote){
        return res.status(404).json({message:"Note not found"})
       }
       res.json({message:"Note deleted successfully"})
    }
    catch(error){
        console.error("Error in deleting ",error);
        res.status(500).json({meassage:"Internal Server error"})
    }
 }

const Note = require("../models/Note")
const getAllNotes = async (req,res) =>{
    try{
        const notes = await Note.find({
            owner:req.user.id
        });
        res.json(notes);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


const getNoteById = async (req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        if(note.owner.toString()!== req.user.id){
            return res.status(403).json({
                message:"Access Denied"
            });
        }
        if(!note){
            return res.status(404).json({
                message:"Note not found"
            });
        }
        res.json(note);

    }catch(error){
        res.status(500).json({
            message:error.message
        });

    }
    


};

const createNote = async (req,res) =>{
    try{
        const note = await Note.create({
            title : req.body.title,
            owner : req.user.id
        });
        res.status(201).json(note);
    }catch(error){
        res.status(400).json({
            message:error.message
        });

    }
   
    
};

const updateNote = async (req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(note.owner.toString()!== req.user.id){
            return res.status(403).json({
                message:"Access Denied"
            });
        }
        if(!note){
            return res.status(404).json({
                message:"Note not found"
            });
        }
        note.title = req.body.title || note.title;
        const updatedNote = await note.save();
        res.json(updatedNote);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }

};

const deleteNote = async (req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({
                message:"Note not found"
            });
        }
        if(note.owner.toString()!== req.user.id){
            return res.status(403).json({
                message:"Access Denied"
            });
        }
        await note.deleteOne();
        res.json({
            message:"note deleted"
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }

   
};


module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
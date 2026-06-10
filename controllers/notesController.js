const notes = require("../data/notes");
const getAllNotes = (req,res) =>{
    res.json(notes);
};


const getNoteById = (req,res) =>{
    
    const note = notes.find(note => note.id == parseInt(req.params.id));
    if(!note){
        return res.status(404).json({
            message:"note not found"
        });
    }
    res.json(note);

};

const createNote = (req,res) =>{
    const {title} = req.body;
    if(!title){
        return res.status(400).json({
            message:"title is required"
        });
    }

    const newNote = {
        id:notes.length+1,
        title:req.body.title
    };

    notes.push(newNote);
    res.status(201).json(newNote);
};

const updateNote = (req,res)=>{
    const note = notes.find(
        note => note.id === parseInt(req.params.id)

    );

    if(!note){
        return res.status(404).json({
            message:"note not found"
        });
    }

    note.title = req.body.title || note.title;
    res.json(note);

};

const deleteNote = (req,res) =>{
    const index = notes.findIndex(note => note.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).json({
            message:"Note not found"

        });

    }

    const deletedNote = notes.splice(index,1);
    res.json({
        message:"note deleted",
        deletedNote

    });
}


module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
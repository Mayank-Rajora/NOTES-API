require("dotenv").config();
const express = require("express");
const logger = require("./middleware/logger");
const app = express();
const Port = process.env.PORT || 3000;
app.use(express.json());
app.use(logger);



const notesRoutes = require("./routes/notesRoutes");
app.use("/notes",notesRoutes);

app.get("/",(req,res)=>{
    res.send("welcome to notes api");
});


app.listen(Port,()=>{
    console.log(`server started at port ${Port}`);
});



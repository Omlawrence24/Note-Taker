
const express = require("express");

const path = require("path");

app = express();

const PORT = 8080;
const notes = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => { 
return res.json(notes)
})

app.post("/api/notes", (req, res) => {
  console.log("creating new note")
  console.log(req.body)
  
  // let newNotes = req.body;
  // console.log(newNotes);
  
  notes.push(req.body);
  return res.json(req.body)
  
  // return console.log(`New Note: ${newNote.title}`);
});


app.get('/api/notes/:id', (req, res) => {
  res.json(notes[req.params.id]);
});

//HTML ROUTES
app.get("/notes", (req, res) => { res.sendFile(path.join(__dirname, "/public/notes.html")) });
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./public/index.html")) });





app.listen(PORT, () => console.log(`App listening on PORT${PORT}`));

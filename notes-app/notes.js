const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) =>  note.title === title)

    if(!duplicateNote){
       
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }else{
        console.log(chalk.red.inverse('Note title already taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    } catch(e) {
        return [];
    }
}

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) =>  note.title !== title)

  if(notesToKeep.length < notes.length){
      console.log(chalk.green.inverse('Note removed'));
      saveNotes(notesToKeep);

  }else{
      console.log(chalk.red.inverse('Note doesnt exist'));
  }
  
}

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.magenta.inverse.bold('Your notes!!'));
    notes.forEach((x) => {
        console.log(x.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteTodisplay = notes.find((note) => note.title === title);
    if(noteTodisplay){
        console.log(chalk.cyan.inverse.italic(noteTodisplay.title));
        console.log(noteTodisplay.body);
    }else{
        console.log(chalk.red.inverse('No note found'));
    }
}

module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNote: listNote,
   readNote: readNote
}
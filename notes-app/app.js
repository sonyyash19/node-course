const chalk = require('chalk');
const { string, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize the version
yargs.version('1.1.0');


// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: string
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler() {
        notes.listNote();
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})


// add remove list read




yargs.parse();
// console.log(yargs.argv); 

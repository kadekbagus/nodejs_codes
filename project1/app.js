console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('kadek'));

// console.log(process.argv);

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

// var command = process.argv[2];
// console.log('Command:', command);

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if(command === 'read') {
	notes.readNote(argv.title);
} else if(command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}
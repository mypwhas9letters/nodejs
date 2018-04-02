console.log("hello world");
const fs = require('fs');

const notes = require('./notes.js')
const _ = require('lodash')
const yargs = require('yargs')
const argv = yargs.argv
console.log(argv)
let unique = _.uniq(["hi",1,3,2,3,1,2,"hi"])

var command = process.argv[2]

if (command === 'add'){
  notes.addNotes(argv.title, argv.body)
}else if (command === 'list'){
  notes.getAll()
}else if(command === 'read'){
  notes.read(argv.title)
}else if(command === "remove"){
  notes.remove(argv.title)
}else{
  console.log("not recognize");
}

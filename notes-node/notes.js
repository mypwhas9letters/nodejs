var addNotes = (title, body) =>{
  console.log("adding not", title, body)
}

var getAll = () =>{
  console.log("getting all notes")
}

var read = (title) => {
  console.log("reading", title)
}

var remove = (title) => {
  console.log("removing", title)
}

module.exports = {
  addNotes,
  getAll,
  read,
  remove
}

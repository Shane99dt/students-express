const express = require('express')
const app = express()
const studentsInfo = require('../studentsInfo')


// get
app.get('/', (req, res) => {
  res.json(studentsInfo)
})

app.get('/:id', (req, res) => {

  const {id} = req.params
  const requestedStudent = studentsInfo.find(student => student.id === Number(id))

  try{
    res.json(requestedStudent)
  }catch{
    res.status(404).send("Not Found")
  }
})






// post
app.post('/', (req, res) => {
  const student = {
    name: req.body.name,
    age: req.body.age,
    id: studentsInfo.length + 1
  }

  studentsInfo.push(student)
  res.json(student)
})






module.exports = app
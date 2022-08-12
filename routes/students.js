const express = require('express')
const app = express()

const students = []


// get
app.get('/', (req, res) => {
  res.json(students)
})

app.get('/:id', (req, res) => {

  const {id} = req.params
  const requestedStudent = students.find(student => {return student.id === id})

  try{
    res.json(requestedStudent)
  }catch(error){
    res.status(404).send("Not Found")
  }
})




// post
app.post('/', (req, res) => {

  const student = {
    name: req.body.name,
    age: req.body.age,
    id: students.length + 1
  }

  const existingStudent = students.find(student => {
    student.name === req.body.name
  })
  console.log(existingStudent)

  if(!existingStudent){
    students.push(student)
    res.status(201).json(student)
  }else{
    res.status(409).send('Student already exists')
  }
})






module.exports = app
const express = require('express')
const app = express()
const students = require('../studentsInfo')

// const students = []


// get
app.get('/', (req, res) => {
  res.json(students)
})

app.get('/:name', (req, res) => {

  const {name} = req.params
  const requestedStudent = students.find(student => {return student.name === name})

  if(requestedStudent){
    res.json(requestedStudent)
  }else{
    res.status(404).json("Not Found")
  }
})




// post
app.post('/', (req, res) => {

  const student = {
    name: req.body.name,
    age: req.body.age,
  }

  const existingStudent = students.find(student => {
    return student.name === req.body.name
  })

  if(!existingStudent){
    students.push(student)
    res.status(201).json(student)
  }else{
    res.status(409).json('student already exists')
  }
})






module.exports = app
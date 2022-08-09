const express = require('express')
const app =express()
const port = 5000
const studentsRoute = require('./routes/students')
const cors = require('cors')
const { json } = require('express')

// lets the front end access my server
app.use(cors())

// lets doing requests with the database
app.use(express.json())

app.use('/students', studentsRoute)

app.listen(port, (req, res) =>{
  console.log(`Server started at port ${port}`)
})
const express = require('express')
const app =express()
const port = 5000

app.listen(port, (req, res) =>{
  console.log(`Server started at port ${port}`)
})
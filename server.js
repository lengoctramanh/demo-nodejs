
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/error', (req, res) => {
  res.json({message:"404 Not Found"})
})
app.get('/user', (req, res) => {
  res.json({name:'Tram Anh',
    age:18,
    gender:"female"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
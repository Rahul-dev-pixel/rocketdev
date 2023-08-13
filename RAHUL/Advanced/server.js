const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello rahghghg!')
})


app.get('/east', (req, res) => {
    res.send('Hello EastGodavari!')
  })
  
  app.get('/West', (req, res) => {
    res.send('Hello WestGodavari!')
  })

  app.get('/North', (req, res) => {
    res.send('Hello NorthGodavari!')
  })

  app.get('/South', (req, res) => {
    res.send('Hello SouthGodavari!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
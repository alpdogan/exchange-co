const express = require('express')
const path = require('path')
var morgan = require('morgan')

const app = express()

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')))
app.use(express.static(path.join(__dirname, './build/static/css')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.get('*', function (req, res) {
  res.send('dont even try :)', 404)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})

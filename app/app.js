const express = require('express')
const app = express()
server = require('http').createServer(app)
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))
app.listen(process.env.PORT || 5000,() => console.log('Example app listening on port 3000!'))
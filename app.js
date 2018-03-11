const express = require('express')
const app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'austro')));
app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))

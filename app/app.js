/*const express = require('express')
const app = express()
server = require('http').createServer(app)
*/
var path = require('path')
var React = require('react')
var ReactDOM = require('react-dom')
var App =require('./components/App.js')

ReactDOM.render(
		<div>thing<App /></div>,
		document.getElementById('app')
	)



/*
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => res.sendFile(__dirname +'index.html'))
app.listen(process.env.PORT || 3000,() => console.log('Example app listening on port 3000!'))
*/
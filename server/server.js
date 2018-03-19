const express = require('express');
const bodyParse = require('body-parser');


//Local imports
const { mongoose } =  require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


const app = express();
app.use(bodyParse.json());
app.post('/todos', ( req, res ) => {
	
	let todo = new Todo({
		text:req.body.text
	})

	todo.save().then( ( doc ) => {
		res.send(doc)
	}, ( err ) => {
		res.status(400).send( err )
	})
})

app.listen('3000',() => {
	console.log('Started on 3000 port')
})




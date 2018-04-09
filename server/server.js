const express = require('express');
const bodyParse = require('body-parser');
const {ObjectID} = require('mongodb');


//Local imports
const { mongoose } =  require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


const app = express();
//Middleware
app.use(bodyParse.json());

// POST /todos
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

// GET /todos
app.get('/todos', ( req, res ) => {

	Todo.find().then( (todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e)
	})

})

// GET /todos/:id
app.get('/todos/:id', ( req, res ) => {

	let id = req.params.id;
	
	//Validaos que el id que nos envian sea válido
	if( !ObjectID.isValid(id) ){
		return res.status(404).send();
	}

	//Buscamos el id usando findById del mongoose
	Todo.findById(id).then( (todo) => {
		if( !todo ){
			return res.status(404).send();
		}
		//Retornamos el JSON del body
		res.send({todo});
	}, (e) => {
		//Id valido pero no lo encuentra en la base de datos
		res.status(400).send();
	})
	
})

// DELETE /todo/:id
app.delete('/todos/:id', ( req, res ) => {

})

// PATCH /todo/:id
app.patch('/todos/:id', ( req, res ) => {

})


app.listen('3000',() => {
	console.log('Started on 3000 port')
})

module.exports = { app } 


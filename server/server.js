const _ = require('lodash');
const express = require('express');
const bodyParse = require('body-parser');
const {ObjectID} = require('mongodb');


//Local imports
const { mongoose } =  require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


const app = express();
//Middleware para que podamos retornar json
app.use(bodyParse.json());

// ******************* todos CRUD *******************
// POST /todos
app.post('/todos', ( req, res ) => {
	
	let todo = new Todo({
		text:req.body.text
	})

	todo.save().then( ( todo ) => {
		res.send(todo)
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
		//todo puede estar vacio, porque no hay registro con ese id
		if( !todo ){
			return res.status(404).send();
		}
		//Retornamos el JSON del body
		res.send({todo});
	}).catch( (e) => {
		res.status(400).send();
	})
	
})

// DELETE /todos/:id
app.delete('/todos/:id', ( req, res ) => {
	
	let id = req.params.id;
	if( !ObjectID.isValid(id) ){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then( (todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});

	}).catch( (e) => {
		res.status(400).send();
	})
})

// PATCH /todos/:id
app.patch('/todos/:id', ( req, res ) => {

	let id = req.params.id;
	let body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, { $set: body }, {new: true}).then( (todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch( (err) => {
		res.status(400).send();
	});
	

})


// ******************* user CRUD *******************

// POST /users
app.post('/users', ( req, res ) => {

	let userParams = _.pick( req.body, ['email','password'])
	let user = new User(userParams)

	user.save().then( (user) => {
		res.send(user);
	}, (err) => {
		res.status(400).send(err)
	})

})




app.listen('3000',() => {
	console.log('Started on 3000 port')
})

module.exports = { app } 


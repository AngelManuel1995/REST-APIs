const {ObjectID} = require('mongodb')

//Local requires
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.Remove({}).then( (todos) => {
    console.log(todos)
}, (err) => {
    console.log(err)
})

Todo.findOneAndRemove({_id:'idValido'}).then((todo) => {
    console.log(todo)
}, (err) => {
    console.log(err);
})

Todo.findByIdAndRemove('idValido').then( (todo) => {
    console.log(todo)
}, (err) => {
    console.log(todo)
})
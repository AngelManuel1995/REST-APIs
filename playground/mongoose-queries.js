//Global requires
const {ObjectID} = require('mongodb')

//Local requires
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// let id = '5ab11b203a650905d6a305be';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }

// Todo.find({
//     _id:id
// }).then( (todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id:id
// }).then( (todo) => {
//     console.log('Todo',todo)
// })

// Todo.findById(id).then((todo)=>{
//     console.log('Todo By Id', todo)
// }).catch( (e) => {
//     console.log(e)
// })

let id = '5aadd9189d9ee2433993f923';
User.findById(id).then((user) => {
    if(!user){
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user,undefined,2));

}).catch( e => console.log(e))
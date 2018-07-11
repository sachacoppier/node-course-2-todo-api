const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


// var id = 'a5b43dc280c815fa328a73a66';
var userId = '5b3e692260fb06175a0ccf3';
// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

if(!ObjectID.isValid(userId)){
	console.log('User ID not valid');
};

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not valid.');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e) => {
// 	if(e){
// 		console.log(e);
// 	}
// });

User.findById(userId).then((user) => {
	if(!user){
		return console.log('Id not valid.');
	}
	console.log('User by id', JSON.stringify(user, undefined, 2));
}).catch((e) => {
	console.log(e);
});



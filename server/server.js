require('./config/config');


const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser'); //take json convert it into object
const {ObjectID} = require('mongodb'); 

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		//console.log('Todo by Id', JSON.stringify(todo, undefined, 2));
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});

	// Find by id
		// success
			// if todo - send it back
			// if no todo - send back 404 with empty body
		// error
			// 404 - and send empty body back
	// res.send(req.params);
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo}); // {todo: todo}

	}).catch((e) => {
		res.status(400).send();
	});

});

app.patch('/todos/:id', (req, res) => {

	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']); //the data to be updated

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo}); //object notation

	}).catch((e) => {
		res.status(400).send();
	});

});


app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});


module.exports = {app};
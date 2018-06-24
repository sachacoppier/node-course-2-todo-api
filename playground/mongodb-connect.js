// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

var user = {name: 'Sacha', age:'24'};
//var {name} = user; //make new variables from object properties
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //error and dbobject
	if(err){
		return console.log('Unabale to connect to Mongodb server.'); // the program stop when it returns something
	}
	console.log('Connected to Mongodb server.');


	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {

	// 	if(err){
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });


	 db.collection('Users').insertOne({
	 	name: 'Sacha',
	 	age: 24,
	 	location: 'Annecy',
	 	completed: false
	 }, (err, result) => {

	 	if(err){
	 		return console.log('Unable to insert todo', err);
	 	}

	// 	//console.log(JSON.stringify(result.ops, undefined, 2)); //result.ops is an array of all the documents that got inserted
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

	// });


	db.close();
});
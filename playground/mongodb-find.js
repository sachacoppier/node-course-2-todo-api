// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //error and dbobject
	if(err){
		return console.log('Unabale to connect to Mongodb server.'); // the program stop when it returns something
	}
	console.log('Connected to Mongodb server.');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5b2fa9dbb07a65cea0eb34d9') //looking for _id that have a propriety equal to the id number
	// }).toArray().then((docs) => { //toArray return a promese
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => { //toArray return a promese
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	db.collection('Users').find({name: 'Sacha'}).toArray().then((docs) => { //toArray return a promese
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	});

	//db.close();
});
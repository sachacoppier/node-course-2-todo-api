// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //error and dbobject
	if(err){
		return console.log('Unabale to connect to Mongodb server.'); // the program stop when it returns something
	}
	console.log('Connected to Mongodb server.');

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b2fa62a968cda80ed9940e0')
	}, {
		$set: {
			name: 'Sacha'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});
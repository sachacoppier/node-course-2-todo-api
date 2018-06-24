// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //error and dbobject
	if(err){
		return console.log('Unabale to connect to Mongodb server.'); // the program stop when it returns something
	}

	// deleteMany
	 // db.collection('Users').deleteMany({name: 'Sacha'}).then((result) => {
	 // 	console.log(result);
	 // });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	 // db.collection('Users').findOneAndDelete({
	 	//_id: new ObjectID('5b2fa68574acc78102782852')
	 //}).then((result) => {
	 // 	console.log(JSON.stringify(result, undefined, 2);
	 // });

	//db.close();
});
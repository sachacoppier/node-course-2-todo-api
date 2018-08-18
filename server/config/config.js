var env = process.env.NODE_ENV || 'development'; // environment variable

if(env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/Todos'; 
}else if (env === 'test'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodosTest';
}
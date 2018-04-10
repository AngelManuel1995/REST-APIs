//MongoClient: nos permite ejecutar la funcion que es un callback llamada connect 
// Que si no nos devuelve un error nos traera algo para hacer la conecion a la base de datos
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    
	if(err){
		return console.log('Unable to connect to Mongodb')
	} 
	//Creamos la constante db que nos permitirá hacer operaciones en la base de datos con la respuesta
	//que nos llego del callback
	const db = client.db('TodoApp')
	console.log('Connected to Mongodb')

	db.collection('Users').find().toArray().then( 
		( docs ) => {
			console.log('Todos')
			console.log(JSON.stringify(docs, undefined, 2))
		}, 
		( err ) => {
			console.log("Error", err)
		})

		db.collection('Users').find({
			_id: new ObjectID('5aa94abfaf8e5c178fd2ce54')
		}).toArray().then( 
			( docs ) => {
				console.log('User found by _id = 5aa94abfaf8e5c178fd2ce54')
				console.log(JSON.stringify(docs, undefined, 2))
			}, 
			( err ) => {
		})

		db.collection('Users').find().count().then( (count) => {
			console.log(`Users count ${ count }`)
		}, ( err ) => {
			console.log('Error', err)
		})

	// client.close()

})
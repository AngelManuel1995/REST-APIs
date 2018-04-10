const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, client ) => {
	if( err ){
		return console.log('Unable to connect to mongodb')
	}
	const db = client.db('TodoApp');
  /*
	//deleteMany
	// db.collection('Users').deleteMany({
	//     age:26
	// }).then( ( result ) => {
	//     console.log(result)
	// })


	//deleteOne
	// db.collection('Users').deleteOne({location:'Philadelphia'}).then( (result) => {
	//     console.log(result)
	// })

	//findOneAndDelete
	// db.collection('Users').findOneAndDelete({
	//     location:'Philadelphia'
	// }).then( ( result ) => {
	//     console.log( result )
	// })
  */

	db.collection('Users').deleteMany({
		name:'Daniela'
	}).then( ( result ) => {
		console.log(result)
	})
	console.log('\n')
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5aa94ae1ee2d3b17cd317080')
	}).then( ( result ) => {
		console.log(result)
	})

})
//Podemos entonces usar metodos que nos son dados para eliminar registros de la base de datos
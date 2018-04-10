const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, client ) => {
    
	if(err){
		return console.log('Unable to connect to mongodb')
	}

	const db = client.db('TodoApp')
/*
	//findOneAndUpdate
	// db.collection('Users').findOneAndUpdate({
	// 	_id: new ObjectID('5aa899fc53f2db509f9ae1cd')
	// },{
	// 	$set:{
	// 		location:'Colombia'
	// 	}
	// }, {
	// 	returnOriginal:false
	// }).then( ( result) => {
	// 	console.log( result )
	// })
*/
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5aa899fc53f2db509f9ae1cd')
	},{
		$set:{
			location:'Medellín'
		},
		$inc:{
			age:1
		}
	}, {
		returnOriginal:false
	}).then( ( result ) => {
		console.log(result)
	})


})
/**
 * Documentación de update:
 * para actualizar un documento lo que vamos a hacer es usar el método findOneAndUpdate
 * que toma varios objetos como parametros:
 * lo primero que toma es un objeto la información con la que vamos a hacer match 
 * El sugundo parametro tambien es un objeto que contendrá las actualizaciones que vamos a hacer
 * y hay que tener en cuenta que se deben usar los operadores de actualizacion para este caso
 * usamos $set y le enviamos un objeto con la nueva información
 * El tercer paramtro que recibe la instruccion de si quermos el objeto original
 * y luego lo tratamos como una promesa 
 */
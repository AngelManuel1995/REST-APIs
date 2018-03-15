const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, client ) => {
    
	if(err){
			return console.log('Unable to connect to mongodb')
	}

	const db = client.db('TodoApp')

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
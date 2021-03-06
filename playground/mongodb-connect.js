const { MongoClient, ObjectID } = require('mongodb');

/*
	//Podemos generar nuestros pripios ObjectID s de la siuiente manera.
	// let obj1 = new ObjectID()
	// let obj2 = new ObjectID()
	// console.log(obj1 + " -- " + obj2)
*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, client ) => {
	
  if( err ){
		return console.log("Unable to connect to MongoDB server");
	}
	const db = client.db('TodoApp')
	console.log('Connected to MongoDB server');
  /*
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false
	// }, ( err, result ) => {
		
	// 	if( err ){
	// 		return console.log('Unable to insert todo ', err )
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))

	// })
	// db.collection('Users').insertOne( {
	// 	name:'Camila',
	// 	age:22,
	// 	location:'Colombia'
	// }, 
	// 	( err, result ) => {
	// 		if( err ){
	// 			return console.log('Unable to insert into Todo', err);
	// 		}
	// 	//	result.ops: es un arreglo que trae todos los registros insertados.
	// 		console.log(result.ops[0]._id.getTimestamp())
	
	// })
  */
	client.close();

})
/**
 * Documentación:
 * 
 * Primero que todo antes de correr nuestra aplicación lo que debemos hacer es iniciar la base de datos y lo haremos de 
 * ls siguiente forma.
 * Tenemos qu ebicar el archivo llamado mongod que está en la siguiente dirección. mongo/bin y entonces lo ejecutaremos
 * de la siguiete manera ./mongo --dbpath ~/mongo-data donde le indicareos que un ruta donde quedará nuestra base de datos
 * 
 * const MongoClient = require('mongodb'): Entonces primero que todos lo que debemos haces es crear la constante con la que 
 * importaremos los metodos y propiedades de mongodb.
 * Esta constante que creamos MongoCliente tiene un método callback que nos devuelve una referecia a la base de datos que 
 * la recibiremos en una variable llamada client despes del error que nos llega en el callback,
 * Esta respuesta trae un metodo (db) nos permitira crear una constante llamada db que nos permitira hacer operaciones en la base de datos
 * Ejemplo de creación de la constante const db = client.db('Base de datos a la que nos vamos a conectat')
 * Luego esta constante nos permitira crear tablas y hacer diferentes tipos de insersiones a la base de datos
 * El método collection recibe la tabla a la que va a ingresar la informacion y un callback insertOne que recibe el objeto
 * que vamos a insertar Ejemplo: db.collection('Users').insertOne({estructura}, (err, result)=>{})
 * en result.ops nos trae la información que se insertó en la base de datos.
 *
 */
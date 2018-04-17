const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10,
    name:'Angel Manuel Góez Giraldo'
};

let token = jwt.sign(data, 'angel1995');
console.log(token);

let decoded = jwt.verify(token, 'angel1995');
console.log(decoded);

// let message = 'I am a awesome text'

// let hashM = SHA256(message).toString()

// let data = {
//     id:4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if(resultHash === token.hash){
//     console.log('Data was not changed')
// }else{
//     console.log('Data was changed. Do not trust!')
//}


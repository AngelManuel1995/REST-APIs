const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let password = "5991legna"

bcrypt.genSalt(10,(err, salt) => {
    console.log(salt,"\n")
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash, "\n")
    })
})

let hashedPassword = '$2a$10$/AULDPdA9mI2QMuBMUqF3OLDuRAPPT.nYe/xTvhHYU4i46j.Lxbpy';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})

// let data = {
//     id: 10,
//     name:'Angel Manuel Góez Giraldo'
// } 

// let token = jwt.sign(data, 'angel1995') 
// console.log(token) 

// let decoded = jwt.verify(token, 'angel1995') 
// console.log(decoded) 

// let message = 'I am a awesome text'

// let hashM = SHA256(message).toString()

// let data = {
//     id:4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5 
// // token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if(resultHash === token.hash){
//     console.log('Data was not changed')
// }else{
//     console.log('Data was changed. Do not trust!')
//}


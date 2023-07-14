/* books.js -  get db info.
Oscar Quispe
301182317
10/19/2021*/

let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema({
    cname: String,
    cnumber: String,
    email: String,    
},
{
    collections: "books"
});

module.exports = mongoose.model('Book', bookModel);
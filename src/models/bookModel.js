const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:String,
    author:{ type: mongoose.Types.ObjectId, ref: 'newAuthor' },

    price:Number,
    ratings:Number,
    publisher: { type: mongoose.Types.ObjectId, ref: 'newPublisher' },
    isHardCover:{type :Boolean, default:false },

    
})


module.exports = mongoose.model('newBook', bookSchema) //users

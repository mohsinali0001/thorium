const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema( {
    firstName: { type: String,
    },
    lastName: String,
    mobile: {
        type: String,
        required : true
    },
    emailId: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {type:Boolean,default:false}, //default value is false 
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('UserNew1', userSchema)


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,

//         required: true
//     },
//     emailId: String,
//     password: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "other"]
//     },
//     age: Number,
//     posts: {type: [], deafult: []}
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema)
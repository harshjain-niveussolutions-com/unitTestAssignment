const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        unique:true,
        required:true
    },
    emailId:{
        type:String,
        unique:true,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User = new mongoose.model('User',userSchema);
// console.log('i am being used');
module.exports=User;
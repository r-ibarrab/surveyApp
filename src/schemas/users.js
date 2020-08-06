const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const user = new Schema ({

    email:{ type : String , required: true },

})

module.exports = mongoose.model('user', user);
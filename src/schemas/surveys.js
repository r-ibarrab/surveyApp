const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const survey = new Schema ({

    name:{ type : String , required: true },
    usermail:{ type : String , required: true },
    questions: {type: Array, required: true},
    results: {type: Array},
    live:{type: Boolean, default:false},
    livenumber:{type: String},
    customize:{type:Object}
})

module.exports = mongoose.model('survey', survey);
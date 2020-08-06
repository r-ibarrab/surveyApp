const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const survey = new Schema ({

    name:{ type : String , required: true },
    usermail:{ type : String , required: true },
    questions: {type: Array},
    results: {type: Array},
    live:{type: Boolean}
})

module.exports = mongoose.model('survey', survey);
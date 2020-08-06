const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:surveyappadmin@surveyappdata.cngvo.mongodb.net/SurveyAppData?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true},(e)=>{
    if(!e){
        console.log('connected to db')
    }
})

module.exports = mongoose
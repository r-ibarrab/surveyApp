const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://admin:admin@surveyappdata.cngvo.mongodb.net/SurveyAppData?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true},(e)=>{
        if(e){
            console.log(e)
        }else{
            console.log('connected to db')

        }
    
})


module.exports = mongoose;
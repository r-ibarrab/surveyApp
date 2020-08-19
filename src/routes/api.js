const express = require('express');
const router = express.Router();

const Survey = require('../schemas/surveys')
const Users = require('../schemas/users')



router.get('/user/surveys/:user',async (req,res)=>{

    const surveys = await Survey.find({usermail: req.params.user})
    console.log(surveys)

    res.send(surveys)



})

router.get('/surveys/:id', async (req,res)=>{
    console.log(req.params.id)

    const survey = await Survey.findById(req.params.id)
    console.log(survey)

    res.send(survey)

    
})

router.post('/survey', async (req,res)=>{

    const sentsurvey = req.body
    console.log(req.body)

    const newsurvey = new Survey(sentsurvey)

    await newsurvey.save()
    res.send({message:'ok'})


})

router.put('/survey/:id',async (req,res)=>{
    const editsurvey = req.body

    await Survey.findByIdAndUpdate(req.params.id, editsurvey)

    res.send({message:'ok'})

})

router.get('/verifyuser/:email',async (req,res)=>{

    const emailuser = req.params.email
    console.log(emailuser)


    const user = await Users.findOne({email:emailuser})
    console.log(user)

    if(user === null){
        console.log('dentro')

        const newUser = new Users({email:emailuser})
        await newUser.save()

    }else{
        console.log('ya existe')
    }

    res.send({message:'ok'})
})

module.exports = router;
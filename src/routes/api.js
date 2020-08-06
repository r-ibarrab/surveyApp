const express = require('express');
const router = express.Router();
const User = require('../schemas/users');
const Survey = require('../schemas/surveys');
const url = require('url');






router.get('/users/:email', async (req , res)=>{

const umail = req.params.email;

const searchedUser = await User.find({email:umail})

if(!searchedUser.exist)
    {
        const newuser = new User({
            email : umail
        })
        
        await newuser.save()

    }

    
    const dato1 = encodeURI('uno')
    const dato2 = encodeURI('dos')
    const dato3 = encodeURI('tres')


    res.redirect(url.format({
        pathname:'/',
        query:{
            "primero":dato1,
            "segundo":dato2,
            "tercero":dato3
        }
    }));

})



module.exports = router;
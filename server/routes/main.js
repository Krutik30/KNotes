const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('',  (req,res)=>{
    const locals = {
        title: "Your Notes",
        description: "We can create notes here"
    }

    function handleClick(){

    }



    try{

        // const data = await Note.find();

        const data = [
            {
                title: "Krutik",
                content: "Kam kar"
            },{
                title: "Krutik",
                content: "Kam kar"
            },{
                title: "Krutik",
                content: "Kam kar"
            },
        ]
        res.render('index', {locals , data});

    }catch(err){
        console.log(err);
    }
})

router.get('/makeNote',async (req,res)=>{
    
    res.render('makeNote',{});
})

module.exports = router;
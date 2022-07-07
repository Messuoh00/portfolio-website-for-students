const express= require('express')

const router=express.Router()

router.get('/', (req,res)=>{

    res.render('index')
})



router.get('/download', function(req, res){  
     res.download('/cv.pdf');
  });



module.exports=router
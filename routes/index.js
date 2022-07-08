const express= require('express')
const router=express.Router()

const nodemailer=require('nodemailer')





router.get('/', (req,res)=>{

    res.render('index')
})



router.get('/download', function(req, res){  
     res.download('public/CV.pdf');
  })




router.post('/', async (req, res)=>{
  
  
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'contact_me_here@zohomail.com', // generated ethereal user
        pass: 'zhP9q1UfJftG', // generated ethereal password
      },
    });
  
    const msg={
      from: 'contact_me_here@zohomail.com', // sender address
      to: "houssememrbt@gmail.com", // list of receivers
      subject: req.body.mail+' : '+req.body.subject, // Subject line
      text: req.body.textarea, // plain text body
    }


   
    const info = await transporter.sendMail(msg);
  
    
   res.render('index',{succes:'mail envoyer :)'}) 
 

   
 })


module.exports=router
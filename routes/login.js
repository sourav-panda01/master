const express=require('express');
const app=express()
router=express.Router();

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true} ));
router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  action="/login" method="POST"><label>Enter Name</label><input type="text" id="username" name="name"><button type="submit">Login</button></form>')
})
router.post('/login',(req,res,next)=>{
    console.log("Req  body",req.body)
    res.redirect('/')
})
module.exports=router
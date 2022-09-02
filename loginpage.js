const express=require('express')
const app=express();

const path=require('path')
const fs=require('fs')
const loginroute=require('./routes/login.js')
const sendmessageroute=require('./routes/chat.js')
fs.appendFile('message.txt',"", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
app.use(loginroute)
app.use(sendmessageroute)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'))
})
app.listen(5000);


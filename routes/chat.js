const express=require('express');
const app=express();
const fs=require('fs')
router=express.Router();
const rootDir=require('../util/path')
router.get('/',(req,res,next)=>{
    //path = require('path'),    
    //filePath = path.join(__dirname, 'start.html');

    fs.readFile('message.txt', {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: ' + data);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<p>localStorage.getItem(username)<p>')
            res.write(`${data}`)
            console.log("after res write")
            
        } else {
            console.log(err)
        }
        console.log("before res send")
        res.write('<form action="/" method="POST"><label>Please Chat</label><input type="text" name="text"><button type="submit" onClick="window.location.reload();">Enter</button></form>')
        console.log("after res send")

});
    console.log("Inside Chat.js  get function get '/'")   
})
router.post('/',(req,res,next)=>{
    const body=[]
    req.on('data',(chunk)=>{
        console.log("This is chunk",chunk)
        body.push(chunk)
    })
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString()
        console.log("This is parsed body",parsedBody)
        const message=parsedBody.split('=')[1]
        fs.appendFile('message.txt', message, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
          res.redirect('/')
    })
     })


    
module.exports=router


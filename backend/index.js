const express =require('express')
const app = express()
app.get('/',(req,res)=> {
    console.log("server start");
    
})
app.listen(5173)
import express from 'express';

const app = express()

app.get('login',(req,res)=>{
    res.send('I am login endPoint ')
})

app.listen(3000,()=>{
    console.log('😍 i am running')
})
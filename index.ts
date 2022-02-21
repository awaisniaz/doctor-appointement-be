import express from 'express';

const app = express()
const PORT = process.env.PORT || 3000;
app.get('login',(req,res)=>{
    res.send('I am login endPoint ')
})

app.listen(PORT,()=>{
    console.log('😍 i am running')
})
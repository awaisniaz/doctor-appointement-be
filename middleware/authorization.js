export const authorize = (req,res,next)=>{
    if(req.headers.authorization != undefined){
        next()
    }
    else{
        res.send('U are unauthorize')
    }

}
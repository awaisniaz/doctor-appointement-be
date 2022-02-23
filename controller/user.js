export const createUser = (req,res)=>{
  console.log(req.headers)
  res.send(req.body)
}

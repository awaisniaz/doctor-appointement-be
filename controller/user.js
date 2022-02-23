import { generatepasswordHash,generateJwtToken } from "../utils/passwordHashing"
export const createUser = (req,res)=>{
  generatepasswordHash(req.body.password,10).then(data=>{
    req.body['hash'] = data
    req.send(req.body)

  }).catch(err=>{
    res.send(req.body)
  })
}


export const loginUser = (req,res)=>{

  req.body['token'] = generateJwtToken(req.body)
   res.send(req.body)   

}

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const generatepasswordHash = (password,saltRounds)=>{ 
    return bcrypt.hash(password, saltRounds)
}
export const generateJwtToken = (data)=>{
    return jwt.sign(data, 'doctoAppointment');
}

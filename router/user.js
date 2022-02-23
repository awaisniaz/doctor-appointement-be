import express from "express";
import {createUser,loginUser} from "../controller/user";
import { authorize } from '../middleware/authorization'
var router = express.Router()
console.log("I am Awais Niaz")
router.post('/create',authorize,createUser)
router.get('/login',loginUser)

export default router

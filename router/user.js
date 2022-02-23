import express from "express";
import {createUser} from "../controller/user";
import { authorize } from '../middleware/authorization'
var router = express.Router()
console.log("I am Awais Niaz")
router.post('/create',authorize,createUser)

export default router

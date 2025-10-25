import express from 'express'
import { Register } from '../Controller/AuthController.js'

const Router = express.Router()

Router.post("/register", Register)

export default Router
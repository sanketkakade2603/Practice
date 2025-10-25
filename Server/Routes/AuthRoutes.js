import express from 'express'
import { Register, Login, ForgetPassword, ResetPassword } from '../Controller/AuthController.js'

const Router = express.Router()

Router.post("/register", Register)
Router.post("/login", Login)

Router.post("/forget-password", ForgetPassword)
Router.post("/reset-password/:token", ResetPassword)

export default Router
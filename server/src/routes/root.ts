import Router, {Express} from "express";
import {check} from "express-validator";

import UserController from "./UserController.js";

// @ts-ignore
const router: Express = new Router();

router.post('/register', [
    check('email', 'wrong email').isEmail(),
    check('password', 'wrong password').isLength({min: 6})
], UserController.register)

router.post('/login',[
    check('email', 'wrong email').normalizeEmail().isEmail(),
    check('password', 'wrong password').exists()
], UserController.login)

export default router;
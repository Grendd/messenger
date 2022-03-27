import Router from "express";
import { check } from "express-validator";
import UserController from "./UserController";
const router = Router();
router.post('/register', [
    check('email', 'wrong email').isEmail(),
    check('password', 'wrong password').isLength({ min: 6 })
], UserController.register);
router.post('/login', [
    check('email', 'wrong email').normalizeEmail().isEmail(),
    check('password', 'wrong password').exists()
], UserController.login);
export default router;
//# sourceMappingURL=index.js.map
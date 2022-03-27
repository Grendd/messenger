var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import User from "../models/User.js";
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        errors: errors.array(),
                        message: "Invalid login or password"
                    });
                }
                const { email, password } = req.body;
                const user = yield User.findOne({ email });
                if (!user) {
                    return res.status(400).json({ message: "User not found" });
                }
                const isMatch = yield bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({ message: "Wrong password" });
                }
                const token = jwt.sign({ userId: user.id }, config.get("JWtoken"), { expiresIn: "1h" });
                return res.json({ token, userId: user.id, message: "User logined successfully" });
            }
            catch (e) {
                res.status(500).json({ message: "Login failed" });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        errors: errors.array(),
                        message: "Invalid login or password"
                    });
                }
                const { email, password } = req.body;
                const candidate = yield User.findOne({ email });
                if (candidate) {
                    return res.status(400).json({ message: "User already exists" });
                }
                const hashedPassword = yield bcrypt.hash(password, 12);
                const user = new User({ email, password: hashedPassword });
                yield user.save();
                return res.status(201).json({ message: "User created!" });
            }
            catch (e) {
                res.status(500).json({ message: "Registration failed" });
            }
        });
    }
}
export default new UserController();
//# sourceMappingURL=UserController.js.map
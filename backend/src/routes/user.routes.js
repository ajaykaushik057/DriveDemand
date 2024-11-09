import {Router} from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';


const userRouter = Router();

userRouter.route("/register").post(
        upload.single('avatar'),
        registerUser
)

userRouter.route("/login").post(loginUser)

export default userRouter;
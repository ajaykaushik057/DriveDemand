import {Router} from 'express'
import { getAllCars } from '../controllers/carController.js';

const carRouter = Router();

carRouter.route("/available-cars").get(getAllCars)

export default carRouter
import express , { Request, Response,  NextFunction, Router} from 'express';
import { CreateVandor, GetVandorById, GetVandors } from '../controllers';

const router = express.Router();

router.post('/vandor',CreateVandor);

router.get('/vandors',GetVandors);

router.post('/vandor/:id',GetVandorById);

router.get('/',(req:Request,res:Response,next:NextFunction) => {
        return res.json({message:'This answer get from Admin'});
})

export {router as AdminRoute};
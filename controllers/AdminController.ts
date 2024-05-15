import  { Request,Response , NextFunction } from 'express'
import {CreateVandorInput} from '../dto'

export  const CreateVandor = async (req: Request , res: Response, next: NextFunction) => {
    const {name,ownerName,foodType,pincode,adress,phone,email,password} = <CreateVandorInput>req.body;
    
    return res.json({name,ownerName,foodType,pincode,adress,phone,email,password});
}


export  const GetVandors = async (req: Request , res: Response, next: NextFunction) => {
    
}

export  const GetVandorById = async (req: Request , res: Response, next: NextFunction) => {
    
}
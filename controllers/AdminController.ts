import  { Request,Response , NextFunction } from 'express'
import {CreateVandorInput} from '../dto'
import { Vandor } from '../models';
import { GeneratePassword, GenerateSalt } from '../utils';

export  const CreateVandor = async (req: Request , res: Response, next: NextFunction) => {
    const {name,ownerName,foodType,pincode,adress,phone,email,password} = <CreateVandorInput>req.body;
    

    const existingVandor = await Vandor.findOne({email : email})
    console.log(existingVandor)

    if(existingVandor !== null){
        return res.json({'message' : "A vandor is existi with this email id " })

    }

    //generate a salt
    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password,salt);
    //encrypt the password using the salt 



    const createdVandor = await Vandor.create({
        name: name,
        ownerName :ownerName,
        foodType : foodType,
        pincode : pincode,
        adress: adress,
        phone: phone,
        email : email,
        password : userPassword,
        salt: salt,
        rating: 0,
        serviceAvaliable: false,
        converImages:[],
    })



    return res.json(createdVandor);
}


export  const GetVandors = async (req: Request , res: Response, next: NextFunction) => {
    
}

export  const GetVandorById = async (req: Request , res: Response, next: NextFunction) => {
    
}
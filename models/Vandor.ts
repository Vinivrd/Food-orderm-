import mongoose, {Schema,Document,Model} from 'mongoose';

interface VandorDoc extends Document{
    name:string;
    ownerName:string;
    foodType:[string];
    pincode:string;
    adress:string;
    phone: string;
    email: string;
    password: string;
    serviceAvaliable: string;
    converImages: [string];
    rating:number;
    foods:any
}

const VandorSchema = new Schema({
    name:{type: String, required:true},
    ownerName:{type: String, required:true},
    foodType:{type: [String]},
    pincode:{type: String, required:true},
    adress:{type: String},
    phone:{type: String, required:true}, 
    email:{type: String, required:true}, 
    password:{type: String, required:true}, 
    serviceAvaliable:{type: String, required:true}, 
    converImages:{type: [String]},
    rating: {type: Number},
    foods:[{
        type: mongoose.SchemaType.ObjectId,
        ref:'food'
    }]
},{
    timestamps:true
});

const Vandor =  mongoose.model<VandorD  oc>('vandor',VandorSchema);
export { Vandor} 
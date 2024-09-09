import Joi from "joi";
import mongoose from "mongoose";



const BDSchema = mongoose.Schema({
   //
    img : { type: String,  require:true },    
    businessName: { type: String, require:true },
    logo: {type:String,required:true},
    address:{type:String,required:true},
    phone:{type:String,required:true} 

})

export const BD = mongoose.model("BD", BDSchema);
export const BDValidator = (_BDToValidate) => {
    let BDJoi = Joi.object({
        img :Joi.string().required() ,    
        phone: Joi.string().required(),
        businessName: Joi.string().required(),
        address: Joi.string().required(),
        logo: Joi.string().required()

    })

    return BDJoi.validate(_BDToValidate);
}
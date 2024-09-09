import Joi from "joi";
import mongoose from "mongoose";
import * as roleType from "./roleType.js"

const userSchema = mongoose.Schema({
    
   
    name: { type: String, required: true },
    password: {type:String,required:true}
 
})

export const User = mongoose.model("users", userSchema);
export const userValidator = (_userToValidate) => {

    let userJoi = Joi.object({
      
        name: Joi.string().required(),
        password: Joi.string().required()
    

    })

    return userJoi.validate(_userToValidate);
}
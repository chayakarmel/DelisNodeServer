import Joi from "joi";
import mongoose from "mongoose";

 const minimalProduct = mongoose.Schema({
    productName:{type: String ,required:true},
    qty:{type:Number,required:true},
    sum:Number
 })

const orderSchema = mongoose.Schema({
    //service: "", qty: "", date: "", name: "", email: "", phone: ""
    service : { type: String, require:true },
    qty : { type: Number,  require:true },    
    date: { type: Date, default: Date.now() },
    name: {type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true} 

})

export const Order = mongoose.model("orders", orderSchema);
export const orderValidator = (_orderToValidate) => {

    let orderJoi = Joi.object({
        service : Joi.string(),
        qty :Joi.number() ,    
        date: Joi.date().required(),
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required()

    })

    return orderJoi.validate(_orderToValidate);
}
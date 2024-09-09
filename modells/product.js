import Joi from "joi";
import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    //name: "", descripition: "", price: "", img: ""
    name: { type: String, required: true },
    description: String,
    price:{ type: Number, required: true },
   img : { type: String, required: true }
   
})

export const Product = mongoose.model("products", productSchema);
export const productValidator = (_productToValidate) => {

    let productJoi = Joi.object({
       name: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number().required(),
        img : Joi.string().required()
       
    })

    return productJoi.validate(_productToValidate);
}
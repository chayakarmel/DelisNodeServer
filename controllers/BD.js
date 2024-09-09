
import { BD, BDValidator } from "../modells/BD.js";
import mongoose from "mongoose";

export const getAllBD = async (req, res) => {
    try {
        let bd = await BD.find();
        res.json(bd);
    }
    catch (err) {
        res.status(500).send("cannot find the orders");
    }
}
export const addBD = async (req, res) => {
    try {     
        let newOrder = BDValidator(req.body);
        if (newOrder.error)
            return res.status(401).send("invalid details");
        newOrder = await BD.create(req.body);     
        res.json(newOrder);
    }         
    catch (err) {
        res.status(500).send("cannot find add order");
    }
}
export const deleteBDById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).send("invalid id");
    try {
        let deletOrder = await BD.findByIdAndDelete({ _id: id })
        if (!deletOrder)
            return res.status(400).send("this id isnot exist")
        res.json(deletOrder);
    }
    catch (err) {
        res.status(500).send("cannot delet this order");
    }
}
// export const getAllBDByUserId = async (req, res) => {
//     try {
//         let { _id } = req.BD;
//         let allOrders = await BD.find({ userId: _id });
//         if (!allOrders)
//             res.status(400).send("their user has no orders");
//         res.json(allOrders);
//     }
//     catch (err) {
//         res.status(500).send("cannot get the orders");
//     }
// }
export const updateBDSetOff = async (req, res) => {
    let {id }= req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).send("invalid id");
    try {
        let update = await Order.findById(id);
        if(!update)
        return  res.status(400).send("this order id is not definded");
        let updateOrder = await Order.findByIdAndUpdate({ _id: id }, { isSetOff: true },{new:true})
        res.json(updateOrder);

    }
    catch (err) {
        res.status(500).send("cannot update");
    }
}

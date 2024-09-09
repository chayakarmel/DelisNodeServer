import express from "express";
import * as  orderController from "../controllers/order.js";
import { authAdmin, auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", orderController.getAllorders);

router.post("/", orderController.addorder);

router.delete("/:id",  orderController.deleteorderById);

router.get("/:id", orderController.getAllOrderByUserId);

router.put("/:id",  orderController.updateorderSetOff);

export default router;
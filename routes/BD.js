import express from "express";
import * as  bdController from "../controllers/BD.js";
import { authAdmin, auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", bdController.getAllBD);

 router.post("/", bdController.addBD);

 router.delete("/:id",  bdController.deleteBDById);

// router.get("/:id", bdController.getAllbdById);

router.put("/:id",  bdController.updateBDSetOff);

export default router;
//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", productController.getProducts);
router.post("/", authentication, productController.createProduct);

export default router;

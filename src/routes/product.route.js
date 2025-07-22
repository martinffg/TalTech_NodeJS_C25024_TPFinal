//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", productController.getProducts);
router.post("/create", authentication, productController.createProduct);
router.get("/:id", productController.getProductById);
router.delete("/:id", authentication, productController.deleteProductById);

export default router;

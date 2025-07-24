import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/create', authentication, productController.createProduct);
productRouter.delete('/:id', authentication, productController.deleteProductById);

export default productRouter;

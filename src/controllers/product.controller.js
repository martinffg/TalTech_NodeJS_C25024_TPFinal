// controller
import productService from "../services/product.service.js";
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    console.log(req.body);

    // validar campos
    const newProduct = {
      id : new Date().getTime(),
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

   await productService.createProduct(newProduct);
    

    res
      .status(200)
      .json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productService.getOneProduct(id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ payload: producto });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  //console.log("id_controller:",id);
  try {
    const { id } = req.params;
    await productService.deleteOneProduct(id);
    console.log("Document successfully deleted!");
    res.status(200).json({ message: "Producto eliminado." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export default { getProducts, createProduct, getProductById, deleteProductById };

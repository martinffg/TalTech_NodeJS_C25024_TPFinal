// controller
import productService from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
        return res.status(400).json({ message: "El ID es requerido" });
    }
    
    const producto = await productService.getOneProduct(parseInt(id));
       
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ payload: producto });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    
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
      .json({ message: "Se creó nuevo producto: ", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await productService.deleteOneProduct(id);
    if (!deleted) {
      return res.status(404).json({ error: "Producto No Encontrado." });
    }
    console.log("Document successfully deleted!");
    res.status(200).json({ message: "Producto eliminado." });
  } catch (error) {
    res
    .status(500)
    .json({ message: "Error interno del servidor", error: error.message });
  }
};

export default { getProducts, createProduct, getProductById, deleteProductById };
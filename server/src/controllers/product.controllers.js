import Product from "../models/product.models.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

async function addProduct(req, res) {
  try {
    const { name, description, price, stock, category } = req.body;

    if (
      !name.trim() ||
      !description.trim() ||
      !price ||
      stock === undefined ||
      !category.trim() ||
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required product details and image!",
      });
    }

    const productPrice = Number(price);
    const productStock = Number(stock);

    if (
      !Number.isFinite(productPrice) ||
      productPrice <= 0 ||
      !Number.isInteger(productStock) ||
      productStock < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid price and stock!",
      });
    }

    const uploadedImage = await uploadToCloudinary(req.file.buffer);

    const product = await Product.create({
      name,
      description,
      price: productPrice,
      stock: productStock,
      category,
      image: uploadedImage.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully!",
      product,
    });
  } catch (error) {
    console.error("Error adding product", error);
    return res.status(500).json({
      success: false,
      message: "Error adding product!",
    });
  }
}

async function getAllProduct(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Fetched all products successfully!",
      products,
    });
  } catch (error) {
    console.log("Error getting all product", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching all products!",
    });
  }
}

async function getSingleProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Fetched the product successfully!",
      product,
    });
  } catch (error) {
    console.log("Error getting the product", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching the product!",
    });
  }
}

async function updateProduct(req, res) {
  try {
    const id = req.params.id;

    const updateForm = Object.fromEntries(
      Object.entries(req.body).map(([key, value]) => {
        if (["price", "stock"].includes(key)) {
          return [key, Number(value)];
        }

        if (typeof value === "string") {
          return [key, value.trim()];
        }
        return [key, value];
      }),
    );

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer);
      updateForm.image = uploadedImage.secure_url;
    }

    const product = await Product.findByIdAndUpdate(id, updateForm, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "updated the product successfully!",
      product,
    });
  } catch (error) {
    console.error("Error updating product", error);
    return res.status(500).json({
      success: false,
      message: "Error updating the product!",
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "deleted the product successfully!",
      product,
    });
  } catch (error) {
    console.error("Error deleting product", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting the product!",
    });
  }
}

export {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

import Product from "../models/product.models.js";
import User from "../models/user.models.js";

async function addProductsToWishlist(req, res) {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
    const user = req.user;
    const alreadyExistsInWishlist = user.wishlist.some(
      (id) => id.toString() === productId,
    );

    if (alreadyExistsInWishlist) {
      return res.status(409).json({
        success: false,
        message: "Product already exists in wishlist!",
      });
    }

    user.wishlist.push(productId);
    await user.save();
    return res.status(200).json({
      success: true,
      message: "product added in wishlist successfully!",
      product,
    });
  } catch (error) {
    console.error("Error adding products in wishlist", error);
    return res
      .status(500)
      .json({ success: false, message: "Error adding products in wishlist!" });
  }
}

async function getWishlist(req, res) {
  try {
    const user = await User.findById(req.user._id)
      .select("wishlist")
      .populate("wishlist");

    return res.status(200).json({
      success: true,
      message: "fetched wishlist successfully!",
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Error fetching wishlist", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching wishlist!",
    });
  }
}

async function deleteProductFromWishlist(req, res) {
  try {
    const { productId } = req.params;
    const user = req.user;
    const alreadyExistsInWishlist = user.wishlist.some(
      (id) => id.toString() === productId,
    );
    if (!alreadyExistsInWishlist) {
      return res.status(404).json({
        success: false,
        message: "Product does not exists in wishlist!",
      });
    }

    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Products deleted from wishlist!",
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Error deleting products from wishlist", error);
    return res.status(500).json({
      success: false,
      message: "Error deleting products from wishlist!",
    });
  }
}

export { addProductsToWishlist, getWishlist, deleteProductFromWishlist };

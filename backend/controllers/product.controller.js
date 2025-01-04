import mongoose from "mongoose";
import { Product } from "../model/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({
      success: true,
      length: products.length,
      message: "Products retrieved successfully",
      data: products
    })

  } catch (err) {
    console.log(`Errorin retrieving product: ${err.message}`)
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}

export const createProduct = async (req, res) => {
  try {
    const product = req.body
    if (!product.name || !product.price | !product.image) {
      res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }
    const newProduct = new Product(product)
    await newProduct.save()
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct
    })
  }
  catch (err) {
    console.log(`Error in creating product: ${err.message}`)
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid Product ID"
      })
    }

    const search = await Product.findById(id)
    !search && res.status(404).json({
      success: false,
      message: "Product not found"
    })

    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: updatedProduct
    })

  } catch (err) {
    console.log(`Error in updating product: ${err.message}`)
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid Product ID"
      })
    }

    const search = await Product.findById(id)
    !search && res.status(404).json({
      success: false,
      message: "Product not found"
    })

    await Product.findByIdAndDelete(id, product)
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    })

  } catch (err) {
    console.log(`Error in updating product: ${err.message}`)
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}
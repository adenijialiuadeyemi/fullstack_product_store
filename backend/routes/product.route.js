import express from 'express'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'

const router = express()

router.get('/', getProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export const productRoute = router
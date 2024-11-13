import {Router} from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controller/product.controller.js'
import { createBox, deleteBox, getBox, updateBox } from '../controller/box.controller.js'
import { sendMagicLink, verifyMagicLink } from '../controller/auth.controller.js'
import { AddCats, ChildCat, ParentCat, totalCats, totalChildCats, totalParCats, updateCat } from '../controller/cat.controller.js'
const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getProduct)

router.post('/products', createProduct)

router.put('/products/:id', updateProduct )

router.delete('/products/:id', deleteProduct)

router.get('/lohang', getBox)

router.post('/taolohang', createBox)

router.put('/updatelohang/:id', updateBox)

router.delete('xoalohang/:id', deleteBox)

router.post('/send-magiclink', sendMagicLink)

router.get('/verify-magic-link', verifyMagicLink)

router.get('/categories', ParentCat)

router.get('/categories-child/:IDDMC', ChildCat)

router.get('/total', totalCats)

router.get('/totalParCats', totalParCats)

router.get('/totalChildCats', totalChildCats)

router.put('/updateDM/:id', updateCat)

router.post('/addCats', AddCats)
export default router
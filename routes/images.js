import express from 'express'
import { upload, imagesUpload, imageRemove} from "../controllers/images.js"

const router = express.Router()

router.post('/uploadimages', upload.single('image'), imagesUpload)
router.delete('/removeimage', imageRemove)

export default router

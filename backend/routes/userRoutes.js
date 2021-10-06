import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  addAddress
} from '../controllers/userController.js'
import { protect, admin, limiter } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(limiter, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
router
  .route('/:id/address')
  .post(protect, addAddress)

export default router

import jwt from 'jsonwebtoken'
import type { User } from './src/models/userModel'

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'bbbb',
    {
      expiresIn: '10d',
    }
  )
}

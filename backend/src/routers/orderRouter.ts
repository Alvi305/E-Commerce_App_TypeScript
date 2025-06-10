import { isAuth } from '../../utils'
import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { OrderModel } from '../models/orderModel'
import type { Product } from '../models/productModel'

export const orderRouter = express.Router()

orderRouter.post(
  '/',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).json({ message: 'Cart is empty  ' })
    } else {
      const createdOrder = await OrderModel.create({
        orderItem: req.body.orderItems.map((x: Product) => ({
          ...x,
          product: x._id,
        })),
        shippingAddress: req.body.shippingAddress,
        user: req.user._id,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
      })
      res.status(201).json({ message: 'Order Created', order: createdOrder })
    }
  })
)

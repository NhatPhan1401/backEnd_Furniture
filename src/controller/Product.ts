import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Product, { ProductType, RatingType } from '../models/product';
import User from '../models/user';
import { getIdFromReq } from '../utils/token';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { offset, limit } = req.query;
    const products = await Product.find()
      .skip(parseInt(offset?.toString() ?? '0'))
      .limit(parseInt(limit?.toString() ?? '0'));
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById(_id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    } = req.body as ProductType;
    const _id = new mongoose.Types.ObjectId();
    const product = new Product({
      _id,
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    });
    const savedProduct = await product.save();
    if (savedProduct) {
      return res.status(201).json(savedProduct);
    } else {
      return res.status(500).json({ message: 'Faild to create new product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const {
      img,
      gallery,
      title,
      description,
      category,
      brand,
      price,
      sku,
      shipping,
      storage_quantity,
      colors,
      review,
      rating,
    } = req.body as ProductType;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id },
      {
        $set: {
          img,
          gallery,
          title,
          description,
          category,
          brand,
          price,
          sku,
          shipping,
          storage_quantity,
          colors,
          review,
          rating,
        },
      },
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = req.params.id;
    const deletedProduct = await Product.deleteOne({ _id });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const ratingProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = getIdFromReq(req);
    const product_id = req.params.id;
    const { rate, purchase_id } = req.body;
    if (_id && product_id && rate && purchase_id) {
      const user = await User.findOneAndUpdate(
        {
          _id,
          purchase: { $elemMatch: { _id: purchase_id } },
        },
        {
          $set: {
            'purchase.$.rating': rate,
          },
        },
        { new: true }
      );
      if (user) {
        const product = await Product.findById(product_id);
        if (product) {
          const newRating: RatingType = {
            rate: product.rating
              ? (product.rating.rate * product.rating.num_of_rate + rate) /
                (product.rating.num_of_rate + 1)
              : rate,
            num_of_rate: product.rating ? product.rating.num_of_rate + 1 : 1,
          };
          const updatedProduct = await Product.findOneAndUpdate(
            { _id: product_id },
            {
              $addToSet: {
                user_id: user._id,
                name: user.username,
                email: user.email,
                phone: user.info.phone,
              },

              $set: {
                rating: newRating,
              },
            },
            { new: true }
          );
          if (updatedProduct) {
            res.status(200).json(updatedProduct);
          } else {
            return res
              .status(500)
              .json({ message: 'Failed To Rating Product' });
          }
        } else {
          return res.status(500).json({ message: 'Failed To Rating Product' });
        }
      } else {
        return res.status(500).json({ message: 'Failed To Rating Product' });
      }
    } else {
      return res.status(500).json({ message: 'Failed To Rating Product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  ratingProduct,
};

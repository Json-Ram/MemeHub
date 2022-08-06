import { createError } from "../error.js";
import User from "../models/User.js";


export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true}
      );
      res.status(200).json(updatedUser)
    }catch (err) {
      next(err);
    }
  }else {
    return next(createError(403, "Forbidden action(Updating user)"))
  }
}

export const remove = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json("User has been deleted")
    }catch (err) {
      next(err);
    }
  }else {
    return next(createError(403, "Forbidden action(Deleting user)"))
  }
}

export const getUser = async (req, res, next) => {
  try {

  }catch(err) {
    next(err)
  }
}
export const subscribe = async (req, res, next) => {
  try {

  }catch(err) {
    next(err)
  }
}
export const unsubscribe = async (req, res, next) => {
  try {

  }catch(err) {
    next(err)
  }
}
export const like = async(req, res, next) => {
  try {

  }catch(err) {
    next(err)
  }
}

export const dislike = async (req, res, next) => {
  try {

  }catch(err) {
    next(err)
  }
}
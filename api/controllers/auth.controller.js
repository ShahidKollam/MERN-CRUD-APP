import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10)

  try {
    const newUser = new User({ name, email, password: hashedPassword });
    const saveUser = await newUser.save();
    console.log(saveUser);
  
    res.status(201).json({ message: "User created" });
    
  } catch (error) {
    // res.status(500).json(error.message)
    next(error)
  }
};

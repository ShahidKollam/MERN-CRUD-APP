import User from "../models/user.model.js";

export const signup = async(req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });
  await newUser.save()
    res.status(201).json({message:'User created'})

};
    
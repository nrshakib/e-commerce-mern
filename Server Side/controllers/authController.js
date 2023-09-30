import userModel from "../models/userModel.js";
import hashPassword from "../handlers/authHandler.js";

const registerController = async () => {
  try {
    const { name, email, phone, address, password } = req.body;

    //validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }

    //check existing user
    const existingUser = await userModel.finfOne({ email });

    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered.Please Log In",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);

    //save user
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Registration Error",
      error,
    });
  }
};

export default registerController;

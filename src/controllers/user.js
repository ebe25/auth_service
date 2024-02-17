const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  const {email, password }= req.body;
  
  try {
    const newUser = await userService.create({
      email: email,
      password: password,
    });

    return res.status(201).send({
      data: newUser,
      message: "User created Succesfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).send({
      data: {},
      message: "User creation failed",
      success: false,
      err: {error},
    });
  }
};
module.exports = {create};

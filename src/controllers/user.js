const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  const {email, password} = req.body;

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

const signIn = async (req, res) => {
  const {email, password} = req.body;
  try {
    const response = await userService.signIn(email, password);
    return res.status(200).send({
      data: response,
      message: "Successfully signed in",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).send({
      data: {},
      message: "something went wrong",
      success: false,
      err: {error},
    });
  }
};

const isAuthenticated = async (req,res)=>{
  const token= req.headers["x-access-token"];
  try {
    const response= await userService.isAuthenticated(token);
    return res.status(200).send({
      data: response,
      message: "User Authentication Sucessful",
      success: true,
      err: {},
    })
  } catch (error) {
    return res.status(500).send({
      data: {},
      message: "something went wrong",
      success: false,
      err: {error},
    });
  }
}


module.exports = {create, signIn,isAuthenticated};

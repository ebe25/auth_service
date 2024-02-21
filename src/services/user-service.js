const {UserRepositary} = require("../repositaries/user-repositary");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/server");
const bcrypt = require("bcrypt");
class UserService {
  constructor() {
    this.userRepo = new UserRepositary();
  }
  #createToken(user) {
    try {
      const token = jwt.sign(user, JWT_SECRET, {expiresIn: "0.5h"});
      return token;
    } catch (error) {
      console.log("Something went wrong in the token create");
    }
  }

  verifyToken(token) {
    try {
      const result = jwt.verify(token, JWT_SECRET);
      return result;
    } catch (error) {
      console.log("Something went wrong in the verify token ");
    }
  }

  #comparePws(someOtherPlaintextPassword, hashedPw) {
    try {
      return bcrypt.compareSync(someOtherPlaintextPassword, hashedPw);
    } catch (error) {
      console.log("Something went wrong while password validation ");
    }
  }
  async create(data) {
    try {
      const newUser = await this.userRepo.create(data);
      return newUser;
    } catch (error) {
      console.log("Something wrong with the service layer");
      throw {error: error};
    }
  }

  async signIn(email, textPw) {
    try {
      //1-> find user by the email
      const OrmUserObj = await this.userRepo.getUserbyEmail(email);
      //2-> compare passwords
      const doPwsMatch = this.#comparePws(textPw, OrmUserObj.password);
      if (!doPwsMatch) {
        throw {error: "Passwords don't match"};
      }
      //3-> createToken
      //not orm obj give the pain js object!
      const newAuthToken = this.#createToken({
        email: OrmUserObj.email,
        password: OrmUserObj.password,
      });
      return newAuthToken;
    } catch (error) {
      console.log("Something wrong with signIn fn service layer");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw {error: "Invalid token"};
      }
      //find a user with the email and check if te user is deleted or not
      const user = await this.userRepo.getUserbyEmail(response.email);
      const userId = await this.userRepo.getUserbyId(user.id);
      if (!userId) {
        throw {error: "User not found"};
      }
      return userId.id;
    } catch (error) {
      console.log("Something wrong with auth fn service layer", error);
      throw {error};
    }
  }
}
module.exports = UserService;

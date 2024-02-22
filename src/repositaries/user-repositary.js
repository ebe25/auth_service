const {User, Role} = require("../models/index");

class UserRepositary {
  async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log("Something wrong with repositary layer", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const res = await User.destroy({
        where: {
          id: id,
        },
      });
      return res;
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }

  async getUserbyId(id) {
    try {
      const response = await User.findByPk(id);
      return response;
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }
  async getUserbyEmail(email) {
    try {
      const response = await User.findOne({
        where: {
          email: email,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await this.getUserbyId(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      const isAdmin = await user.hasRole(adminRole);
      return isAdmin;
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }

  async isCustomer(userId) {
    try {
      const user = await this.getUserbyId(userId);
      const customerRole = await Role.findOne({
        where: {
          name: "CUSTOMER",
        },
      });
      return await user.hasRole(customerRole);
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }

  async isBusiness(userId) {
    try {
      const user = await this.getUserbyId(userId);
      const businessRole = await Role.findOne({
        where: {
          name: "BUSINESS",
        },
      });
      return await user.hasRole(businessRole);
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error;
    }
  }
}

module.exports = {UserRepositary};

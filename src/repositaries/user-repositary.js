const {User} = require("../models/index");

class UserRepositary {
  async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.log("Something wrong with repositary layer");
      throw error
    }
  }

  async delete(id) {
    try {
      const res = await User.destry({
        where: {
          id: id,
        },
      });
      return res;
    } catch (error) {
      console.log("Something wrong with repositary layer");
    }
  }
}

module.exports = {UserRepositary};

const {UserRepositary} = require("../repositaries/user-repositary");

class UserService {
  constructor() {
    this.userRepo = new UserRepositary();
  }

  async create(data) {
    try {
      const newUser = await this.userRepo.create(data);
      return newUser;
    } catch (error) {
      console.log("Something wrong with the service layer");
      throw error
    }
  }
}
module.exports = UserService;

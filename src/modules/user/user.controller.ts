import User, { UserType } from "./user.schema";

class UserController {
  static async getAllUsers(): Promise<Array<UserType>> {
    const user: Array<UserType> = await User.find({});
    return user;
  }
}

export default UserController;

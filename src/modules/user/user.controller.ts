import User, { UserType } from "./user.schema";

class UserController {
  static async getUserById({discordId}:any): Promise<
    | (UserType & {
        _id: any;
      })
    | null
  > {
    let user:
      | (UserType & {
          _id: any;
        })
      | null;
    try {
      user = await User.findOne({ discordId });
    } catch (e) {
      return null;
    }
    return user;
  }
  static async getAllUsers(): Promise<Array<UserType>> {
    const users: Array<UserType> = await User.find({});
    return users;
  }
  static async createUser({
    discordId,
    name,
    current,
    vc,
  }: any): Promise<UserType> {
    const user: any = new User({ discordId, name, current, vc });
    user.save();
    return user;
  }

  static async deleteUser({ discordId }: any) {
    const user: any = User.findOneAndDelete({ discordId });
    return user;
  }
}

export default UserController;

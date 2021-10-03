import config from "config";
import notify from "../utils/notify";
import { runEvent } from "../index";
import removeRole from "../utils/removeRole";
import UserController from "../modules/user/user.controller";

export async function run(e: runEvent) {
  removeRole(e.message, config.get("app.roleId"));
  if (e.args.length > 0) {
    return e.message
      .reply("This command does not take any arguments")
      .then((msg: runEvent["message"]) => {
        setTimeout(() => {
          msg.delete();
          e.message.delete();
        }, 5000);
      });
  }
  const user = await UserController.getUserById({discordId:e.message.author.id});
  console.log(user)
  if (!user) {
    return e.message.reply("You don't have a goal set !");
  }
  
  await UserController.deleteUser({ discordId: e.message.author.id });
  notify(
    e.client,
    config.get("app.notify-channel"),
    `<@${e.message.author.id}> Your goal has been deleted!`
  );
}

export const names = ["delete"];

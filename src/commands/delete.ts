import config from "config";
import notify from "../utils/notify";
import {runEvent} from "../index";
import removeRole from "../utils/removeRole";

export function run(e:runEvent) {
    notify(e.client,config.get('app.notify-channel'),`<@${e.message.author.id}> Your goal has been deleted!`);
    removeRole(e.message,config.get('app.roleId'));
}

export const names = ["delete"];
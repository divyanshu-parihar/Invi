import config from 'config';
import addRole from '../utils/addRole';
import { runEvent } from '../index';
import notify from '../utils/notify';
import UserController from '../modules/user/user.controller';

export async function run(e: runEvent) {
  if (e.args.length == 0)
    return e.message
      .reply('Please supply me a goal')
      .then((msg: any) =>
        setTimeout(() => {
          msg.delete();
          e.message.delete();
        }, 5000),
      )
      .catch((err: any) => console.error(err));

  addRole(e.message, config.get('app.roleId'));
  await UserController.createUser({
    discordId: e.message.author.id,
    name: e.message.author.username,
    current: false,
    vc: e.message.member.voice.channel,
  });
  notify(e.client, config.get('app.notify-channel'), `<@${e.message.author.id}> Your goal has been set!`);
  return;
}

export const names = ['goal'];

// import UserController from '../modules/user/user.controller';
import { runEvent } from '../index';

export async function run(e: runEvent) {
  // console.log(await UserController.getAllUsers());
  e.message.reply(`Pong! Current ping is ${e.client.ws.ping}`);
}

export const names = ['ping'];

import {runEvent} from "../index";

export function run(e:runEvent) {
    e.message.reply(`Pong! Current ping is ${e.client.ws.ping}`);
}

export const names = ["ping"];
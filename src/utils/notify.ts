import { runEvent } from '../index';

export default (client: runEvent['client'], id: string, message: string) => {
  return client.channels.cache.find((i: any) => i.id === id).send(message);
};

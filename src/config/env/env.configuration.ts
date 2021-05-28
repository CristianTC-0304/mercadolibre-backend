import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.APP_PORT,
  sateliteKenobiPosition: process.env.SATELITE_KENOBI_POSITION,
  sateliteSkywalkerPosition: process.env.SATELITE_SKYWALKER_POSITION,
  sateliteSatoPosition: process.env.SATELITE_SATO_POSITION,
  sateliteKenobiName: process.env.SATELITE_KENOBI_NAME,
  sateliteSkywalkerName: process.env.SATELITE_SKYWALKER_NAME,
  sateliteSatoName: process.env.SATELITE_SATO_NAME,
  messageInitialPosition: process.env.MESSAGE_INITIAL,
}));

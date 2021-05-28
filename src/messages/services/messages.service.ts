import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageRepository } from '../repositories/messageRepository.service';
import { EnvConfigRepository } from '../../config/env/repositories/envRepository.service';
import { MessageError } from '../constant/message.constant';

@Injectable()
export class MessagesService implements MessageRepository {
  constructor(private envConfigRepository: EnvConfigRepository) {}

  getMessage(messages: Array<Array<string>>): string {
    try {
      let resConcatMsg: string[] = [];
      let resRemoveGap: string[] = [];
      let resMessageComplete: string = '';
      resConcatMsg = this.getConcatMessage(messages);

      if (!resConcatMsg) throw new Error(MessageError);

      resRemoveGap = this.removeGap(resConcatMsg);

      if (!resRemoveGap) throw new Error(MessageError);

      resMessageComplete = this.getMessageComplete(resRemoveGap);

      if (resMessageComplete === '') throw new Error(MessageError);

      return resMessageComplete;
    } catch (err) {
      throw new NotFoundException({
        status: 404,
        message: err.message,
      });
    }
  }

  getConcatMessage(messages: Array<Array<string>>): Array<string> {
    const listWords: string[] = [];
    messages.map((msg) => {
      listWords.push(...msg);
    });
    return listWords;
  }

  removeGap(messages: Array<string>): Array<string> {
    const listWords: string[] = [];
    for (const Inmsg in messages) {
      if (messages[Inmsg] != '') listWords.push(messages[Inmsg]);
    }
    return listWords;
  }

  getMessageComplete(message: Array<string>): string {
    const messageComplete =
      this.envConfigRepository.messageInitialPosition.split(' ');
    const accept: string[] = [];
    for (const msg in messageComplete) {
      const res = message.find(
        (res) => res.toLowerCase() === messageComplete[msg].toLowerCase(),
      );
      if (typeof res != 'undefined') accept.push(res);
    }
    return accept.length === messageComplete.length
      ? this.envConfigRepository.messageInitialPosition
      : '';
  }
}

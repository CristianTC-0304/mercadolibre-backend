export abstract class MessageRepository {
  abstract getMessage(messages: Array<Array<string>>): string;
}

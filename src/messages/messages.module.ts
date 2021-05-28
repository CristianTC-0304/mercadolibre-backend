import { Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MessageRepository } from './repositories/messageRepository.service';
import { EnvModule } from '../config/env/env.module';

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: MessageRepository,
      useClass: MessagesService,
    },
  ],
  exports: [MessageRepository],
})
export class MessagesModule {}

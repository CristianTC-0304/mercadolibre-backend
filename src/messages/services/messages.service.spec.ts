import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';
import { MessageRepository } from '../repositories/messageRepository.service';
import { EnvModule } from '../../config/env/env.module';

describe('MessagesService', () => {
  let service: MessageRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvModule],
      providers: [
        {
          provide: MessageRepository,
          useClass: MessagesService,
        },
      ],
    }).compile();

    service = module.get<MessageRepository>(MessageRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

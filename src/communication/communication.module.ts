import { Module } from '@nestjs/common';
import { CommunicationController } from './controllers/communication.controller';
import { CommunicationService } from './services/communication.service';
import { CommunicationRepository } from './repositories/communicationRepository.service';
import { LocationsModule } from 'src/locations/locations.module';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
  imports: [LocationsModule, MessagesModule],
  controllers: [CommunicationController],
  providers: [
    {
      provide: CommunicationRepository,
      useClass: CommunicationService,
    },
  ],
  exports: [CommunicationRepository],
})
export class CommunicationModule {}

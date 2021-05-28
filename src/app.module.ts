import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { MessagesModule } from './messages/messages.module';
import { CommunicationModule } from './communication/communication.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LocationsModule, MessagesModule, CommunicationModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

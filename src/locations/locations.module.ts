import { Module } from '@nestjs/common';
import { LocationsService } from './services/locations.service';
import { MessagesModule } from '../messages/messages.module';
import { EnvModule } from '../config/env/env.module';
import { LocationRepository } from './repositories/locationRepository.service';

@Module({
  imports: [MessagesModule, EnvModule],
  providers: [
    {
      provide: LocationRepository,
      useClass: LocationsService,
    },
  ],
  exports: [LocationRepository],
})
export class LocationsModule {}

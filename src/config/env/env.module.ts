import { Module } from '@nestjs/common';
import { EnvConfigRepository } from './repositories/envRepository.service';
import { EnvConfigService } from './services/env.service';
import { ConfigModule } from '@nestjs/config';
import EnvConfiguration from './env.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
    }),
  ],
  providers: [
    {
      provide: EnvConfigRepository,
      useClass: EnvConfigService,
    },
  ],
  exports: [EnvConfigRepository],
})
export class EnvModule {}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfigRepository } from '../repositories/envRepository.service';

@Injectable()
export class EnvConfigService implements EnvConfigRepository {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('app.port');
  }

  get sateliteKenobiPosition(): number[] {
    return this.configService
      .get<string>('app.sateliteKenobiPosition')
      .split(',')
      .map(Number);
  }

  get sateliteSkywalkerPosition(): number[] {
    return this.configService
      .get<string>('app.sateliteSkywalkerPosition')
      .split(',')
      .map(Number);
  }

  get sateliteSatoPosition(): number[] {
    return this.configService
      .get<string>('app.sateliteSatoPosition')
      .split(',')
      .map(Number);
  }

  get sateliteKenobiName(): string {
    return this.configService
      .get<string>('app.sateliteKenobiName')
      .toLowerCase();
  }

  get sateliteSkywalkerName(): string {
    return this.configService
      .get<string>('app.sateliteSkywalkerName')
      .toLowerCase();
  }

  get sateliteSatoName(): string {
    return this.configService.get<string>('app.sateliteSatoName').toLowerCase();
  }

  get messageInitialPosition(): string {
    return this.configService.get<string>('app.messageInitialPosition');
  }
}

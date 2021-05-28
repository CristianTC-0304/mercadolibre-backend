import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { LocationRepository } from '../repositories/locationRepository.service';
import { EnvModule } from '../../config/env/env.module';

describe('LocationsService', () => {
  let service: LocationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvModule],
      providers: [{
        provide: LocationRepository,
        useClass: LocationsService
      }],
    }).compile();

    service = module.get<LocationRepository>(LocationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

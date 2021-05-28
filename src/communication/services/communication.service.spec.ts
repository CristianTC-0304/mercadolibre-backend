import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationService } from './communication.service';
import { MessageRepository } from '../../messages/repositories/messageRepository.service';
import { LocationRepository } from '../../locations/repositories/locationRepository.service';
import { LocationsModule } from '../../locations/locations.module';
import { MessagesModule } from '../../messages/messages.module';
import { CommunicationRepository } from '../repositories/communicationRepository.service';
import {
  mockNotFounMessage,
  mockNotFoundSatelite,
  mockMessageCompleteRes,
  mockPositionCompleteRes,
  mockBodyTopSecret,
  mockresponseTopSecret,
  mockBodyOneSatelite,
  mockBodyFailureTopSecretMessage,
  mockBodyFailureTopSecretSatelite,
  mockBodyOneSateliteSucces,
  mockResponseTopOnly,
} from '../__mocks__/communication.mock';
import { MessagesService } from '../../messages/services/messages.service';
import { LocationsService } from '../../locations/services/locations.service';
import { EnvModule } from '../../config/env/env.module';

describe('CommunicationService', () => {
  let service: CommunicationRepository;
  let messageRepository: MessageRepository;
  let locationRepository: LocationRepository;

  const mockServiceMessageRepository = {
    getMessage: () => {
      return {};
    },
  };

  const mockServiceLocationRepository = {
    getLocation: () => {
      return {};
    },
  };

  const mockService = {
    topSecret: () => {
      return {};
    },
    topSecretSplit: () => {
      return {};
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LocationsModule, MessagesModule, EnvModule],
      providers: [
        {
          provide: CommunicationRepository,
          useClass: CommunicationService,
          useValue: mockService,
        },
        {
          provide: MessageRepository,
          useClass: MessagesService,
          useValue: mockServiceMessageRepository,
        },
        {
          provide: LocationRepository,
          useClass: LocationsService,
          useValue: mockServiceLocationRepository,
        },
      ],
    }).compile();

    service = module.get<CommunicationRepository>(CommunicationRepository);
    messageRepository = module.get<MessageRepository>(MessageRepository);
    locationRepository = module.get<LocationRepository>(LocationRepository);
  });

  it('should throw an error generate message in topSecret', () => {
    try {
      service.topSecret(mockBodyFailureTopSecretMessage);
    } catch (err) {
      expect(err.response).toEqual(mockNotFounMessage);
    }
  });

  it('It should throw an error not exist satelite in topSecret', () => {
    try {
      service.topSecret(mockBodyFailureTopSecretSatelite);
    } catch (err) {
      expect(err.response).toEqual(mockNotFoundSatelite);
    }
  });

  it('It should return message and position in topSecret', () => {
    jest
      .spyOn(messageRepository, 'getMessage')
      .mockReturnValue(mockMessageCompleteRes);
    jest
      .spyOn(locationRepository, 'getLocation')
      .mockReturnValue(mockPositionCompleteRes);

    const response = service.topSecret(mockBodyTopSecret);

    expect(response).toEqual(mockresponseTopSecret);
  });

  it('It ahould return message and position topSecretSplit', () => {
    jest
      .spyOn(messageRepository, 'getMessage')
      .mockReturnValue(mockMessageCompleteRes);
    jest
      .spyOn(locationRepository, 'getLocation')
      .mockReturnValue(mockPositionCompleteRes);

    const response = service.topSecretSplit('sato', mockBodyOneSateliteSucces);
    expect(response).toEqual(mockResponseTopOnly);
  });

  it('It should throw an erro not exist message in topSecretSplit', () => {
    try {
      service.topSecretSplit('sato', mockBodyOneSatelite);
    } catch (err) {
      expect(err.response).toEqual(mockNotFounMessage);
    }
  });

  it('It should throw an erro not exist satelite in topSecretSplit', () => {
    try {
      service.topSecretSplit('kenobiiii', mockBodyOneSatelite);
    } catch (err) {
      expect(err.response).toEqual(mockNotFoundSatelite);
    }
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationController } from './communication.controller';
import { CommunicationRepository } from '../repositories/communicationRepository.service';
import { CommunicationService } from '../services/communication.service';
import {
  mockBodyTopSecret,
  mockResponseCommunication,
  mockNotFoundSatelite,
  mockBodyOneSatelite,
  mockBodyFailureTopSecretSatelite,
  mockBodyFailureTopSecretMessage,
  mockNotFounMessage,
} from '../__mocks__/communication.mock';
import { LocationsModule } from '../../locations/locations.module';
import { MessagesModule } from '../../messages/messages.module';

describe('CommunicationController', () => {
  let controller: CommunicationController;
  let service: CommunicationRepository;

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
      imports: [LocationsModule, MessagesModule],
      controllers: [CommunicationController],
      providers: [
        {
          provide: CommunicationRepository,
          useClass: CommunicationService,
          useValue: mockService,
        },
      ],
    }).compile();
    controller = module.get<CommunicationController>(CommunicationController);
    service = module.get<CommunicationRepository>(CommunicationRepository);
  });

  it('It should return position and message okay and topSecret', () => {
    jest.spyOn(service, 'topSecret').mockReturnValue(mockResponseCommunication);
    const response = controller.topSecret(mockBodyTopSecret);
    expect(service.topSecret).toHaveBeenCalledWith(mockBodyTopSecret);
    expect(response).toBe(mockResponseCommunication);
  });

  it('It should return error and topSecret when you cant fine the message', () => {
    try {
      controller.topSecret(mockBodyFailureTopSecretMessage);
    } catch (err) {
      expect(err.response).toEqual(mockNotFounMessage);
    }
  });

  it('It should return erro and topSecret when you cant fine the location', () => {
    try {
      controller.topSecret(mockBodyFailureTopSecretSatelite);
    } catch (err) {
      expect(err.response).toEqual(mockNotFoundSatelite);
    }
  });

  it('It should return position and message okay and topSecreplit', () => {
    jest
      .spyOn(service, 'topSecretSplit')
      .mockReturnValue(mockResponseCommunication);
    const response = controller.topSecretSplit(
      'sato',
      mockBodyOneSatelite,
    );
    expect(service.topSecretSplit).toHaveBeenCalledWith(
      'sato',
      mockBodyOneSatelite,
    );
    expect(response).toBe(mockResponseCommunication);
  });

  it('it should return position and message okay and getTopSecretSplit', () => {
    jest
      .spyOn(service, 'topSecretSplit')
      .mockReturnValue(mockResponseCommunication);

    const response = controller.getTopSecretSplit(
      'sato',
      mockBodyOneSatelite,
    );
    expect(service.topSecretSplit).toHaveBeenCalledWith(
      'sato',
      mockBodyOneSatelite,
    );
    expect(response).toBe(mockResponseCommunication);
  });
});

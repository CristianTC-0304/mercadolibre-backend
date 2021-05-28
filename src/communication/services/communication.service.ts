import { Injectable } from '@nestjs/common';
import { CommunicationRepository } from '../repositories/communicationRepository.service';
import { LocationRepository } from '../../locations/repositories/locationRepository.service';
import { MessageRepository } from '../../messages/repositories/messageRepository.service';
import { TopSecretSplitDTO } from '../dto/topSecretSplit.dto';
import { TopSecretDTO } from '../dto/topSecret.dto';
import { ResponseCommunicationDTO } from '../interfaces/communication.interface';

@Injectable()
export class CommunicationService implements CommunicationRepository {
  constructor(
    private readonly locationRepository: LocationRepository,
    private readonly messageRepository: MessageRepository,
  ) {}

  topSecret(topSecretData: TopSecretDTO): ResponseCommunicationDTO {
    try {
      const topSecretDistance = [];
      const topSecretMessages = [];
      topSecretData.satelites.map((res) => {
        topSecretMessages.push(res.message);
      });
      const message = this.messageRepository.getMessage(topSecretMessages);
      topSecretData.satelites.map((res) => {
        topSecretDistance.push({
          sateliteName: res.name,
          distance: res.distance,
        });
      });
      const position = this.locationRepository.getLocation(topSecretDistance);

      return {
        position,
        message,
      };
    } catch (err) {
      throw err;
    }
  }

  topSecretSplit(
    satelite: string,
    topSecretSplitData: TopSecretSplitDTO,
  ): ResponseCommunicationDTO {
    try {
      const sateliteDistance = [];
      const sateliteMessage = [];
      sateliteDistance.push({
        sateliteName: satelite,
        distance: topSecretSplitData.distance,
      });
      sateliteMessage.push(topSecretSplitData.message);

      const position = this.locationRepository.getLocation(sateliteDistance);
      const message = this.messageRepository.getMessage(sateliteMessage);
      return {
        position,
        message,
      };
    } catch (err) {
      throw err;
    }
  }
}

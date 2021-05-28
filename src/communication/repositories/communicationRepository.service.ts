import { TopSecretDTO } from '../dto/topSecret.dto';
import { TopSecretSplitDTO } from '../dto/topSecretSplit.dto';
import { ResponseCommunicationDTO } from '../interfaces/communication.interface';

export abstract class CommunicationRepository {
  abstract topSecret(topSecretData: TopSecretDTO): ResponseCommunicationDTO;
  abstract topSecretSplit(
    satelite: string,
    topSecretSplitData: TopSecretSplitDTO,
  ): ResponseCommunicationDTO;
}

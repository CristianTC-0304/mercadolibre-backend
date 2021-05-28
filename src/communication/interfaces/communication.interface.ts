import { ResponseTrilaterationDTO } from '../../locations/interfaces/location.interface';

export interface ResponseCommunicationDTO {
  position: ResponseTrilaterationDTO;
  message: string;
}

import { DistanceDto } from '../dtos/distance.dto';
import { ResponseTrilaterationDTO } from '../interfaces/location.interface';

export abstract class LocationRepository {
  abstract getLocation(distance: DistanceDto[]): ResponseTrilaterationDTO;
}

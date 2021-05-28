import { Injectable, NotFoundException } from '@nestjs/common';
const nodeTrilateration = require('node-trilateration');
import { DistanceDto } from '../dtos/distance.dto';
import { EnvConfigRepository } from '../../config/env/repositories/envRepository.service';
import { LocationRepository } from '../repositories/locationRepository.service';
import {
  ResponseTrilaterationDTO,
  ResponseDistanceSateliteDTO,
} from '../interfaces/location.interface';
import {
  MessageErrorNotExistPosition,
  MessageErrorNotExistSatelite,
} from '../constants/location.constan';

@Injectable()
export class LocationsService implements LocationRepository {
  constructor(private envConfigRepository: EnvConfigRepository) {}

  getLocation(
    distance: DistanceDto[],
  ): ResponseTrilaterationDTO {
    try {
      let statusSatelite: boolean = false;
      let notExistSatelite: string = '';
      let value = {} as ResponseTrilaterationDTO;
      for (const dis of distance) {
        statusSatelite = this.validateSatelite(dis.sateliteName.toLowerCase());
        if (!statusSatelite) {
          notExistSatelite = dis.sateliteName;
          break;
        }
      }
      if (!statusSatelite)
        throw new Error(`${MessageErrorNotExistSatelite} ${notExistSatelite}`);

      const distances = this.getDistances(distance);

      value = this.validateDistanceTrilaterarion(
        distances.kenobi,
        distances.skywalker,
        distances.sato,
      );

      if (value.x === null) throw new Error(MessageErrorNotExistPosition);

      return value;
    } catch (err) {
      throw new NotFoundException({
        status: 404,
        message: err.message,
      });
    }
  }

  getDistances(distance: DistanceDto[]): ResponseDistanceSateliteDTO {
    let distanceSatelites = {} as ResponseDistanceSateliteDTO;
    distanceSatelites.kenobi =
      distance.find(
        (res) =>
          res.sateliteName.toLowerCase() ===
          this.envConfigRepository.sateliteKenobiName,
      )?.distance || 0;
    distanceSatelites.skywalker =
      distance.find(
        (res) =>
          res.sateliteName.toLowerCase() ===
          this.envConfigRepository.sateliteSkywalkerName,
      )?.distance || 0;
    distanceSatelites.sato =
      distance.find(
        (res) =>
          res.sateliteName.toLowerCase() ===
          this.envConfigRepository.sateliteSatoName,
      )?.distance || 0;

    return {
      kenobi: distanceSatelites.kenobi,
      skywalker: distanceSatelites.skywalker,
      sato: distanceSatelites.sato,
    };
  }

  validateSatelite(satelite: string): boolean {
    return satelite === this.envConfigRepository.sateliteKenobiName
      ? true
      : satelite === this.envConfigRepository.sateliteSatoName
      ? true
      : satelite === this.envConfigRepository.sateliteSkywalkerName
      ? true
      : false;
  }

  validateDistanceTrilaterarion(
    distanceKenoby: number,
    distanceSkywalker: number,
    distanceSato: number,
  ): ResponseTrilaterationDTO {
    const kenobi = this.envConfigRepository.sateliteKenobiPosition;
    const skywalker = this.envConfigRepository.sateliteSkywalkerPosition;
    const sato = this.envConfigRepository.sateliteSatoPosition;

    const trilateration = [
      {
        x: kenobi[0],
        y: kenobi[1],
        distance: distanceKenoby,
      },
      {
        x: skywalker[0],
        y: skywalker[1],
        distance: distanceSkywalker,
      },
      {
        x: sato[0],
        y: sato[1],
        distance: distanceSato,
      },
    ];

    return nodeTrilateration.calculate(trilateration);
  }
}

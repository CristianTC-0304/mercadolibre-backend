import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommunicationRepository } from '../repositories/communicationRepository.service';
import { TopSecretSplitDTO } from '../dto/topSecretSplit.dto';
import { TopSecretDTO } from '../dto/topSecret.dto';
import { ResponseCommunicationDTO } from '../interfaces/communication.interface';

@ApiTags('Communication')
@Controller('communication')
export class CommunicationController {
  constructor(private communicationRepository: CommunicationRepository) {}

  @Post('/topsecret')
  topSecret(@Body() topSecret: TopSecretDTO): ResponseCommunicationDTO {
    return this.communicationRepository.topSecret(topSecret);
  }

  @Post('/topsecret_split/:satelite_name')
  topSecretSplit(
    @Param('satelite_name') satelite: string,
    @Body() topSecretSplitData: TopSecretSplitDTO,
  ): ResponseCommunicationDTO {
    return this.communicationRepository.topSecretSplit(
      satelite,
      topSecretSplitData,
    );
  }

  @Get('/topsecret_split/:satelite_name')
  getTopSecretSplit(
    @Param('satelite_name') satelite: string,
    @Body() topSecretSplitData: TopSecretSplitDTO,
  ): ResponseCommunicationDTO {
    return this.communicationRepository.topSecretSplit(
      satelite,
      topSecretSplitData,
    );
  }
}

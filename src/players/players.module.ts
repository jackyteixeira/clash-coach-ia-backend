import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { ApiService } from 'src/services/api/api.service';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [PlayersService, ApiService],
})
export class PlayersModule {}

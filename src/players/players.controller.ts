import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get(':tag')
  getOne(@Param('tag') tag: string): any {
    const encodedTag = encodeURI(tag);
    return this.playersService.getPlayerByTag(encodedTag);
  }

  @Get()
  getCards(): any {
    return this.playersService.getCards();
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiService } from './services/api/api.service';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PlayersModule],
  controllers: [AppController],
  providers: [AppService, ApiService],
})
export class AppModule {}

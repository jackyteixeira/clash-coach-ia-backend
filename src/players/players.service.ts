import { Injectable } from '@nestjs/common';
import { ApiService } from '../services/api/api.service';
import { ClashRoyaleAPI } from '@varandas/clash-royale-api';

@Injectable()
export class PlayersService {
  private token: string;
  private clashApi: ClashRoyaleAPI;

  constructor(private readonly apiService: ApiService) {
    this.token = apiService.getApiToken();
    this.clashApi = new ClashRoyaleAPI(this.token);
    console.log(this.token);
  }

  getPlayerByTag(tag: string) {
    const encoded = '%23' + tag;
    return this.clashApi.getPlayerByTag(decodeURIComponent(encoded));
  }

  getCards() {
    return this.clashApi.getCards();
  }
}

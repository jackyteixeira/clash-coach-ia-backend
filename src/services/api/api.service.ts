import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
  private readonly apiToken: string;

  constructor(private configService: ConfigService) {
    this.apiToken = this.configService.get<string>('CLASH_API_TOKEN');
  }

  getApiToken(): string {
    return this.apiToken;
  }
}

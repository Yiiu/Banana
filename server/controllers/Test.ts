import { Get, JsonController } from 'routing-controllers';
import { Inject } from 'typedi';
import { TestService } from '../services';

@JsonController('/test')
export class TestController {
  @Inject('service.test')
  public test: TestService;
  @Get('/')
  public async getArticleNewsList() {
    return await this.test.getTest();
  }
}

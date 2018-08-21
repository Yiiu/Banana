import { Service } from 'typedi';

@Service('service.test')
export class TestService {
  public getTest = async () => {
    return [
      'test'
    ];
  }
}

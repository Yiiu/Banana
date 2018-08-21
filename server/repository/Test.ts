import {EntityRepository, Repository} from 'typeorm';
import { Test } from '../entity/Test';

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {

  public findByName(firstName: string, lastName: string) {
    return this.findOne({ firstName, lastName });
  }

}

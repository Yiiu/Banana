import { getCustomRepository } from 'typeorm';
import { Test } from '../../entity/Test';
import { TestRepository } from '../../repository/Test';

export default class TestQuery {
  protected _TestRepository = getCustomRepository(TestRepository);
  public test = async () => {
    const test = await this._TestRepository.find();
    if (test.length === 0) {
      const newTest = new Test();
      newTest.firstName = 'Timber';
      newTest.lastName = 'Saw';
      newTest.age = 25;
      await newTest.save();
    }
    console.log(test);
    return {
      id: '123123'
    };
  }
}

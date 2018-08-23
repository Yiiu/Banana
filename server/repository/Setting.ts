import {EntityRepository, Repository} from 'typeorm';
import { Setting } from '../entity/Setting';

@EntityRepository(Setting)
export class SettingRepository extends Repository<Setting> {

}

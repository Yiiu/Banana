import {EntityRepository, Repository} from 'typeorm';
import { Article } from '../entity/Article';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {

}

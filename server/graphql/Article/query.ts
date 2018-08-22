import { getCustomRepository } from 'typeorm';
// import { Article } from '../../entity/Article';
import { ArticleRepository } from '../../repository/Article';

export default class ArticleMutation {
  protected _ArticleRepository = getCustomRepository(ArticleRepository);
  public article = async (source: any, { id }: any) => {
    return await this._ArticleRepository.findOne(id);
  }

  public articles = async (source: any, {
    page = 1,
    pageSize = 10
  }) => {
    const data = await this._ArticleRepository.createQueryBuilder('article')
      .orderBy('article.id', 'DESC')
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
    return {
      count: data[1],
      data: data[0],
      page,
      pageSize
    };
  }
}

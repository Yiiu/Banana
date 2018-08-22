import { getCustomRepository } from 'typeorm';
// import { Article } from '../../entity/Article';
import { ArticleRepository } from '../../repository/Article';

export default class ArticleMutation {
  protected _ArticleRepository = getCustomRepository(ArticleRepository);
  public addArticle = async (source: any, { article }: any) => {
    const info = await this._ArticleRepository.save(
      this._ArticleRepository.create(article)
    );
    return info;
  }
}

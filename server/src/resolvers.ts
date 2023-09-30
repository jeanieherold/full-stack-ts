import Query from './resolvers/Query';
import { Resolvers } from './resolvers-types.generated';
import Db, { DbTweet, DbUser } from './db';

export interface TwitterResolverContext {
  db: Db,
  dbTweetCache: Record<string, DbTweet>,
  dbTweetToFavoritecountMap: Record<string, DbUser>,
  dbUserCache: Record<string, number>,
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
}

export default resolvers;
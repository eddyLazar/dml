import { IArticle, IAuthor } from "@narative/gatsby-theme-novela/src/types";

export type AuthorTemplate = React.FC<{
  pageContext: {
    article: IArticle;
    authors: IAuthor[];
    mailchimp: boolean;
    next: IArticle[];
    additionalContext: {
      author: IAuthor;
    };
    group: IArticle[];
  };
  location: Location;
}>;

import { IArticle, IAuthor } from "@narative/gatsby-theme-novela/src/types";

type SocialUrl = {
  url: string;
};

export type AuthorWithSocial = IAuthor & {
  social: SocialUrl[];
};

export type AuthorTemplate = React.FC<{
  pageContext: {
    article: IArticle;
    authors: IAuthor[];
    mailchimp: boolean;
    next: IArticle[];
    additionalContext: {
      author: AuthorWithSocial;
    };
    group: IArticle[];
  };
  location: Location;
}>;

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import AuthorArticles from "@narative/gatsby-theme-novela/src/sections/author/Author.Articles";
import React from "react";
import styled from "../../../gatsby-plugin-theme-ui/styled";
import { AuthorTemplate } from "../../../types";
import { isAuthorPodcast } from "../../../utils/podcasts";
import AuthorHero from "../sections/author/Author.Hero";

const ArticlesPage: AuthorTemplate = ({ location, pageContext }) => {
  const author = pageContext.additionalContext.author;
  const articles = pageContext.group;

  const [isPodcast, podcastRss] = isAuthorPodcast(author);

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={author.name}
        description={author.bio}
      >
        {isPodcast && (
          <link
            type="application/rss+xml"
            rel="alternate"
            title={author.name}
            // @ts-ignore
            href={podcastRss}
          />
        )}
      </SEO>
      <Section narrow>
        <AuthorHero
          author={author}
          isPodcast={!!isPodcast}
          podcastRss={podcastRss}
        />
        <AuthorArticles articles={articles} />
        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator>
      </Section>
      <AuthorsGradient />
    </Layout>
  );
};

export default ArticlesPage;

const AuthorsGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  transition: ${(p) => p.theme.colorModeTransition};
`;

const AuthorPaginator = styled.div`
  text-align: center;
`;

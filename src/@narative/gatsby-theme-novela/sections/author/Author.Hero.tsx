// import Image from "@ components/Image";
import styled from "@emotion/styled";
import Image from "@narative/gatsby-theme-novela/src/components/Image";
import List from "@narative/gatsby-theme-novela/src/components/Lists/List.Unordered";
import SocialLinks from "@narative/gatsby-theme-novela/src/components/SocialLinks";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import React from "react";
import { AuthorWithSocial } from "../../../../types";

interface AuthorHeroProps {
  author: AuthorWithSocial;
  isPodcast: boolean;
  podcastRss?: string;
}

const AuthorHero: React.FC<AuthorHeroProps> = ({
  author,
  isPodcast,
  podcastRss,
}) => {
  const style = {};
  if (isPodcast) {
    style.margin = 0;
  }
  return (
    <Hero style={style}>
      <HeroImage>
        <RoundedImage src={author.avatar.large} />
      </HeroImage>
      <Heading>{author.name}</Heading>
      <Subheading>{author.bio}</Subheading>
      <Social>
        <SocialLinks links={author.social} fill="#73737D" />
      </Social>
      {isPodcast && (
        <div>
          <br />
          <List>
            <li>
              <a href="https://apple.co/3frQXUs" target="_blank">
                Apple Podcasts
              </a>
            </li>
            <li>
              <a href="https://bit.ly/3cfBox9" target="_blank">
                Google Podcasts
              </a>
            </li>
            <li>
              <a href="https://bit.ly/2WR7qJw" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://spoti.fi/3ceCGbR" target="_blank">
                Spotify
              </a>
            </li>
            <li>
              <a href="https://bit.ly/3fvefcf" target="_blank">
                Overcast
              </a>
            </li>
            <li>
              <a href={podcastRss} target="_blank">
                Rss
              </a>
            </li>
          </List>
        </div>
      )}
    </Hero>
  );
};

export default AuthorHero;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 110px;
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${(p) => p.theme.colors.background};
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  ${mediaqueries.tablet`
    width: 146px;
    height: 146px;
  `}

  ${mediaqueries.phablet`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
  `}
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const Heading = styled.h1`
  font-size: 38px;
  font-family: ${(p) => p.theme.fonts.sansSerif};
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;

  ${mediaqueries.tablet`
  `}

  ${mediaqueries.phablet`
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${(p) => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${(p) => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

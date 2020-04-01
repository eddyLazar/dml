module.exports = {
  siteMetadata: {
    title: `Делай Мир Лучше`,
    name: `Делай Мир Лучше`,
    siteUrl: `https://novela.narative.co`,
    description: `Платформа для постов и подкастов и всяких статей.`,
    hero: {
      heading: `Hello, world!`,
      maxWidth: 652
    },
    social: [
      {
        name: `instagram`,
        url: `https://instagram.com/real.edos`
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/profile.php?id=100008334482401`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/EddyLazar`
      },
      {
        name: `github`,
        url: `https://github.com/eddyLazar`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162423757-1"
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Steinbeck"],
          urls: ["/fonts/fonts.css"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Делай Мир Лучше`,
        short_name: `ДМЛ`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/round_with_pattern.png`
        // icon: `src/assets/favicon.png`
      }
    }
  ]
};

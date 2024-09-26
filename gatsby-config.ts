import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Emily Sturman",
    siteUrl: "https://emily.sturman.org",
    description: "Portfolio website for Emily Sturman — Turing Scholar and robotics minor at UT Austin",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL
  // IntelliSense. If you use VSCode you can also use the GraphQL plugin Learn more at:
  // https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "assets",
        "path": `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `M PLUS Code Latin`,
          `Courier Prime`, // you can also specify font weights and styles
        ],
        display: "block",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              showCaptions: true,
              wrapperStyle: "margin: 0;",
              withWebp: true,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-emoji",
        ],
      },
    },
  ],
};

export default config;

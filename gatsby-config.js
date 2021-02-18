module.exports = {
  siteMetadata: {
    title: "Portfolio Website"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass")
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-665HSRFSVC",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-fonts-v2",
      options: {
        fonts: [
          {
            family: "JetBrains Mono",
            weights: ["400"]
          },
          {
            family: "Raleway",
            variable: true,
            weights: ["200..900"]
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    }
  ],
};

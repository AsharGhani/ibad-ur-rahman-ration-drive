"use strict";

module.exports = {
  siteMetadata: {
    title: "Ibad - ur - Rahman",
    description: "Ration Drive",
    keywords: "charity, humanity, clean, water, poverty, alleviation, education, food, health care",
    siteUrl: "https://asharghani.github.io/ibad-ur-rahman-ration-drive/",
    author: {
      name: "Ashar Ghani",
      url: "https://github.com/asharghani/",
      email: "ashar.ghani@outlook.com",
    },
  },
  pathPrefix: "/ibad-ur-rahman-ration-drive",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://asharghani.github.io/ibad-ur-rahman-ration-drive/",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "7cdmx3u8smde",
        accessToken: "0vUyk5SenAu7JRSkJnAlVg6aW1Rfq4dIYz2BkajvemE",
      },
    },
  ],
};

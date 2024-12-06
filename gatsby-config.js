/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Portfolio`,
    description: `This a sample portfolio website.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ]
};
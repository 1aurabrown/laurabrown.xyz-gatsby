/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Laura Brown`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY, // required
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        defaultLang: 'en-us', // optional, but recommended
        // path: '/preview', // optional, default: /preview
        // previews: true, // optional, default: false
        // pages: [{ // optional
        //   type: 'Article', // TypeName from prismic
        //   match: '/article/:uid', // pages will be generated under this pattern
        //   previewPath: '/article', // optional path for unpublished documents
        //   component: require.resolve('./src/templates/article.js'),
        //   sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
        // }],
        // extraPageFields: 'article_type', // optional, extends pages query to pass extra fields
        // sharpKeys: [
        //   /image|photo|picture/, // (default)
        //   'profilepic',
        // ],
      }
    }
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let env = process.env.NODE_ENV;

let path = '.env' + `.${env ? env : 'development'}`

require('dotenv').config({
  path: path
});

console.log(env, path, process.env)

module.exports = {
  siteMetadata: {
    title: `Laura Brown`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
    resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY, // required
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        linkResolver: ({ node, key, value }) => (doc) => {
          // Route for projects
          if (doc.type === "project") {
            return "/projecto/" + doc.uid
          }
          // Route for pages
          if (doc.type === "page") {
            return "/" + doc.uid
          }
          // Homepage route fallback
          return "/"
        },
        schemas: {
          project: require('./src/schemas/project.json'),
          about_text: require('./src/schemas/about_text.json'),
          footer_text: require('./src/schemas/footer_text.json'),
        },
        lang: 'en-us',
        prismicToolbar: true,
      },
    },
  ],
}

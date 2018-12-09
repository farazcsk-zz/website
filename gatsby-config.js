module.exports = {
  siteMetadata: {
    title: 'Faraz Khan, Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Faraz Khan, Software Engineer',
        short_name: 'Faraz Khan',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/f.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Logo from '../components/logo';
import Github from '../components/github';
import Twitter from '../components/twitter';
import Instagram from '../components/instagram';

import css from './index.module.css';

import '../fonts/runda-regular.ttf';
import '../fonts/runda-bold.ttf';

const Index = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'About Faraz Khan, Software Engineer' },
            { name: 'keywords', content: 'Product, design, engineering' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={css.root}>
          <div className={css.header}>
            <div className={css.logoContainer}>
              <Logo />
            </div>
            
              <div className={css.socialLinks}>
                <a href="https://github.com/farazcsk" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://twitter.com/farazKhan404" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/farazkhan4/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
          </div>

          <div className={css.bio}>
            <p>Hey, I'm Faraz!</p>
            <p>
              I focus on the intersection of Engineering and Design.
            </p>
            
            <p>
              Over the past three years I have worked for startups such as <a href="https://www.appearhere.co.uk/" target="_blank" rel="noopener noreferrer" className={css.link}>Appear Here</a> and <a href="https://pi-top.com/" target="_blank" rel="noopener noreferrer" className={css.link}>pi-top</a> and right now I am helping the world learn languages joyfully at <a href="https://www.memrise.com/" target="_blank" rel="noopener noreferrer" className={css.link}>Memrise</a>.</p>
            
            <p>I love comic books, and I am working on one in my spare time.</p>
          </div>
        </div>
      </>
    )}
  />
);

export default Index;

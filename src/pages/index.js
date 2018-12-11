import React from 'react';
import Helmet from 'react-helmet';

import css from './index.module.css';

import logo from '../images/logo.png';
import github from '../images/github.png';
import twiiter from '../images/twitter.png';
import instagram from '../images/instagram.png';

import '../fonts/runda-regular.ttf';
import '../fonts/runda-bold.ttf';

const Index = () => (
  <>
    <Helmet
      title="Faraz Khan, Software Engineer"
      meta={[
        {
          name: 'description',
          content: 'About Faraz Khan, Software Engineer',
        },
        { name: 'keywords', content: 'Product, Design, Engineering' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div className={css.root}>
      <div className={css.container}>
        <header>
          <div className={css.logoContainer}>
            <img alt="logo" src={logo} className={css.logo} />
          </div>

          <nav className={css.socialLinks}>
            <a
              href="https://github.com/farazcsk"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialIconContainer}
            >
              <img alt="github" src={github} className={css.socialIcon} />
            </a>

            <a
              href="https://twitter.com/farazKhan404"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialIconContainer}
            >
              <img alt="twitter" src={twiiter} className={css.socialIcon} />
            </a>

            <a
              href="https://www.instagram.com/farazkhan4/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialIconContainer}
            >
              <img alt="instagram" src={instagram} className={css.socialIcon} />
            </a>
          </nav>
        </header>

        <main>
          <p className={css.paragraph}>Hey, I'm Faraz!</p>

          <p className={css.paragraph}>
            I focus on the intersection of Engineering and Design.
          </p>

          <p className={css.paragraph}>
            Over the past three years, I have built products for startups such
            as{' '}
            <a
              href="https://pi-top.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              pi-top
            </a>{' '}
            and{' '}
            <a
              href="https://www.appearhere.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Appear Here.
            </a>{' '}
            Right now I am helping the world joyfully learn languages at{' '}
            <a
              href="https://www.memrise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Memrise
            </a>
            .
          </p>

          <p className={css.paragraph}>
            I love comic books, so I am working on one in my spare time.
          </p>

          <p className={css.paragraph}>Thanks for stopping by!</p>
        </main>
      </div>
    </div>
  </>
);

export default Index;

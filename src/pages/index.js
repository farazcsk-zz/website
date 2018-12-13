import React from 'react';
import Helmet from 'react-helmet';

import css from './index.module.css';

import logo from '../images/logo.png';

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
        <main>
          <p className={css.paragraph}>Hi!</p>

          <p className={css.paragraph}>
            My focus is the intersection of Engineering and Design.
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
            . Also, I love comic books, so I am working on one in my spare time.
          </p>

          <p className={css.paragraph}>
            You can find me on{' '}
            <a
              href="https://github.com/farazcsk"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Github
            </a>
            ,{' '}
            <a
              href="https://twitter.com/farazKhan404"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Twitter
            </a>
            , and{' '}
            <a
              href="https://www.instagram.com/farazkhan4/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Instagram
            </a>
            .
          </p>

          <p className={css.paragraph}>Thanks for stopping by!</p>
        </main>

        <footer className={css.footer}>
          <div className={css.logoContainer}>
            <img alt="logo" src={logo} className={css.logo} />
          </div>
        </footer>
      </div>
    </div>
  </>
);

export default Index;

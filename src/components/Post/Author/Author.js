// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';
import useDarkMode from 'use-dark-mode';

const Author = () => {
  const { author } = useSiteMetadata();
  const { value } = useDarkMode(false);

  return (
    <div className={styles[value ? 'dark-author' : 'light-author']}>
      <p className={styles[value ? 'dark-author__bio  ' : 'light-author__bio']}>
        {author.bio}
        <a
          className={styles[value ? 'dark-author__bio-twitter' : 'light-author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;

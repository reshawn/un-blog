// @flow
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => {

  const { value } = useDarkMode(false);
  return (
    <div className={styles['author']}>
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          className={styles['author__photo']}
          width="75"
          height="75"
          alt={author.name}
        />
      </Link>

      {isIndex ? (
        <h1 className={styles['author__title']}>
          <Link className={styles[value ? 'author__title-dark-link' : 'author__title-light-link']} to="/">{author.name}</Link>
        </h1>
      ) : (
          <h2 className={styles['author__title']}>
            <Link className={styles[value ? 'author__title-dark-link' : 'author__title-light-link']} to="/">{author.name}</Link>
          </h2>
        )}
      <p className={styles[value ? 'author__dark-subtitle' : 'author__light-subtitle']}>{author.bio}</p>
    </div>
  );
};

export default Author;

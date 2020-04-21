// @flow
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => {
  const { value } = useDarkMode(false);
  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tagSlugs && tagSlugs.map((slug, i) => (
          <li className={styles['tags__list-item']} key={tags[i]}>
            <Link to={slug} className={styles[value ? 'tags__list-item-dark-link' : 'tags__list-item-light-link']}>
              {tags[i]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;

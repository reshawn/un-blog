// @flow
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => {

  const { value } = useDarkMode(false);
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            <time className={styles[value ? 'feed__item-meta-dark-time' : 'feed__item-meta-light-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link to={edge.node.fields.categorySlug} className={styles[value ? 'feed__item-meta-category-dark-link' : 'feed__item-meta-category-light-link']}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles[value ? 'feed__item-title-dark-link' : 'feed__item-title-light-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles[value ? 'feed__item-dark-readmore' : 'feed__item-light-readmore']} to={edge.node.fields.slug}>Read</Link>
        </div>
      ))}
    </div>
  );
}

export default Feed;

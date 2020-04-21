// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle'
import "../DarkMode/toggleStyle.scss" // for ES6 modules
import '../DarkMode/styles.scss';
import Sun from "../DarkMode/Sun";
import Moon from "../DarkMode/Moon";

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const darkMode = useDarkMode(false);

  return (
    <div className={styles['post']}>
      <Link className={styles[darkMode.value ? 'post__dark-home-button' : 'post__light-home-button']} to="/">All Articles</Link>
      <div className='post_toggle'>
        <div className="dark-mode-toggle">
          {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
          <Toggle
            defaultChecked={darkMode.value}
            icons={{ checked: <Moon />, unchecked: <Sun /> }}
            onChange={darkMode.toggle} />
        </div>
      </div>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;

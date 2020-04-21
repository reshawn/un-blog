// @flow
import React from 'react';
import styles from './Content.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => {
  const { value } = useDarkMode(false);
  return (
    <div className={styles['content']}>
      <h1 className={styles[value ? 'content__dark-title' : 'content__light-title']}>{title}</h1>
      <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

export default Content;

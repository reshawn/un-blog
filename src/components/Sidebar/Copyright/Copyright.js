// @flow
import React from 'react';
import styles from './Copyright.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => {
  const { value } = useDarkMode(false);
  return (
    <div className={styles[value ? 'dark-copyright' : 'light-copyright']}>
      {copyright}
    </div>
  );
}

export default Copyright;
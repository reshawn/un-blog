// @flow
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {

  const { value } = useDarkMode(false);
  const lightPrevClassName = cx({
    'pagination__prev-light-link': true,
    'pagination__prev-light-link--disable': !hasPrevPage
  });
  const darkPrevClassName = cx({
    'pagination__prev-dark-link': true,
    'pagination__prev-dark-link--disable': !hasPrevPage
  });

  const lightNextClassName = cx({
    'pagination__next-light-link': true,
    'pagination__next-light-link--disable': !hasNextPage
  });
  const darkNextClassName = cx({
    'pagination__next-dark-link': true,
    'pagination__next-dark-link--disable': !hasNextPage
  });

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={prevPagePath} className={value ? darkPrevClassName : lightPrevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={nextPagePath} className={value ? darkNextClassName : lightNextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;

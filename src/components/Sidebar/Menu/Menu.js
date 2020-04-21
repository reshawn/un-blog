// @flow
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => {
  const { value } = useDarkMode(false);
  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={styles[value ? 'menu__list-item-dark-link' : 'menu__list-item-light-link']}
              activeClassName={styles[value ? 'menu__list-item-dark-link--active' : 'menu__list-item-light-link--active']}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;

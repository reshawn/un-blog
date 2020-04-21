// @flow
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle'
import "../DarkMode/toggleStyle.scss" // for ES6 modules
import '../DarkMode/styles.scss';
import Sun from "../DarkMode/Sun";
import Moon from "../DarkMode/Moon";

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  const darkMode = useDarkMode(false);

  return (
    <div className={styles['sidebar']}>
      <div className={styles[darkMode.value ? 'sidebar__dark-inner' : 'sidebar__light-inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
        <br /><br />

        <div className="dark-mode-toggle">
          {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
          <Toggle
            defaultChecked={darkMode.value}
            icons={{ checked: <Moon />, unchecked: <Sun /> }}
            onChange={darkMode.toggle} />
        </div>

      </div>
    </div >
  );
};

export default Sidebar;

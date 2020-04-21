// @flow
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';
import useDarkMode from 'use-dark-mode';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => {

  const { value } = useDarkMode(false);
  return (
    <div className={styles['contacts']}>
      <ul className={styles['contacts__list']}>
        {Object.keys(contacts).map((name) => (
          <li className={styles[value ? 'contacts__list-dark-item' : 'contacts__list-light-item']} key={name}>
            <a
              className={styles[value ? 'contacts__list-dark-item-link' : 'contacts__list-light-item-link']}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon icon={getIcon(name)} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

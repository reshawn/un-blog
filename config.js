'use strict';

module.exports = {
  url: 'localhost:8000',
  pathPrefix: '/',
  title: 'Unnamed',
  subtitle: 'Description here',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: '',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Unnamed',
    photo: '/photo.jpg',
    bio: 'Description here',
    contacts: {
      email: 'email@gmail.com',
      // telegram: '#',
      twitter: 'twitter',
      // github: 'reshawn',
      // rss: '#',
      // vkontakte: '#'
    }
  }
};

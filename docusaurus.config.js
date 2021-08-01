const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Demystifying Books',
  tagline: '',
  url: 'https://demystify.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bansalankit92', // Usually your GitHub org/user name.
  projectName: 'demystify-books', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Demystifying Books',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/kabir-mansoor/intro',
          position: 'left',
          label: 'Kabir Mansoor',
          activeBaseRegex: 'kabir-mansoor',
        },
        {
          to: '/kabir-geeta/intro',
          position: 'left',
          label: 'Kabir Geeta',
          activeBaseRegex: 'kabir-geeta',
        },
        {
          to: '/kabir-sagar/intro',
          position: 'left',
          label: 'Kabir Sagar',
          activeBaseRegex: 'kabir-sagar',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/bansalankit92/demystify-books',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Kabir Geeta',
              to: '/kabir-geeta/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bansalankit92/demystify-books',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Demystifying Sacred Books. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            'https://github.com/bansalankit92/demystify-books/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bansalankit92/demystify-books/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
};

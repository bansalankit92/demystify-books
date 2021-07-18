const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Demystifying Books',
  tagline: 'Dinosaurs are cool',
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
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },   
      valine: {      
        appId:"1", appKey:"1"  
        },  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // function valine(context, options) {
    //   return {
    //     name: 'my-plugin',
    //     injectHtmlTags({ content }) { return { 
    //       postBodyTags: [`<div id="vcomments"></div>`], 
    //     }; 
    //   },
    // //   async contentLoaded({content, actions}) {    
    // //       const {createData, addRoute} = actions;      // Create friends.json  
    // //       var div = content.createElement("div");
    // //       div.style.width = "100px";
    // //       div.style.height = "100px";
    // //       div.style.background = "red";
    // //       div.style.color = "white";
    // //       div.innerHTML = "Hello";
    // //       content.querySelector(".doc-page").appendChild(div)
    // // },
    //   }
    // },
   // path.resolve(__dirname, './valine'),
  ],
};

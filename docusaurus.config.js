// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metaview',
  tagline: 'Documatation site for metaview.',
  url: 'https://docs.metaview.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'metaviewio', // Usually your GitHub org/user name.
  projectName: 'metaview-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // gh-pages is the default
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		      routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/metaviewio/metaview-docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Metaview Docs',
        logo: {
          alt: 'Metaview Docs',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://metaview.io',
            position: 'right',
            label: 'Home',
          },
          {
            href: 'https://github.com/metaviewio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metaview`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

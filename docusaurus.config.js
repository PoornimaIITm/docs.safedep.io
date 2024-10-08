// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const BASE_URL = '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SafeDep Documentation',
  tagline: 'Safe and Trusted Open Source',
  url: 'https://docs.safedep.io',
  baseUrl: `${BASE_URL}`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/vet.png',

  organizationName: 'safedep',
  projectName: 'docs.safedep.io',
  trailingSlash: false,
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-35RRJQMJ5Q',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/safedep/vet/tree/main/docs',
        },
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
        title: 'SafeDep',
        logo: {
          alt: 'SafeDep',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'quickstart',
          //   position: 'left',
          //   label: 'Quick Start',
          // },
          {
            href: 'https://safedep.io/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/safedep/vet',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/4nxy9SCr',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'SafeDep',
                href: 'https://safedep.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/4nxy9SCr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://safedep.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/safedep',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://safedep.io" target = "_blank" rel = "noopener" >SafeDep</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
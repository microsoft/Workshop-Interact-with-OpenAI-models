// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: "Learn how to interact with OpenAI models",
  tagline: "A 75-minute workshop on OpenAI GPT Models for Microsoft AI Tour",
  url: "https://gloveboxes.github.io/",
  baseUrl: "/Workshop-Interact-with-OpenAI-models/",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  trailingSlash: true,

  organizationName: "gloveboxes", 
  projectName: "Workshop-Interact-with-OpenAI-models", 
  deploymentBranch: "gh-pages", 
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "https://github.com/gloveboxes/Workshop-Interact-with-OpenAI-models/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false
        },
      },

      navbar: {
        title: "Learn how to interact with OpenAI models",
        logo: {
          alt: "Workshop: Learn how to interact with OpenAI models",
          src: "img/logo-ws3.png",
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ]
      },

      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Learn how to interact with OpenAI models. Microsoft AI Tour.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      /* Banner Announcements
      announcementBar: {
        id: 'Microsoft AI Tour',
        content:
          '<a href="https://github.com/microsoft/Workshop-Interact-with-OpenAI-models"><b> Star this on GitHub</b></a> ▪️ <a href="https://aka.ms/aitour"><b>Microsoft AI Tour</b></a> ',
        backgroundColor: '#000000',
        textColor: '#ffffff',
        isCloseable: false,
      },
 */
      /* Clarity Config */
    }),

    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 96,
          max: 1000, // max resized image's size.
          min: 420, // min resized image's size. 
          steps: 4, // #images b/w min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
};

module.exports = config;

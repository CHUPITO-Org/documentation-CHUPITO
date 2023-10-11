// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Event App Portal',
  tagline: 'Documentación de proyecto Chupito',
  url: 'https://client-url.com/',
  baseUrl: '/documentation',
  onBrokenLinks: 'throw', // WARNING: Please don't change/remove it. It could throw consistency/deployment issues 
  onBrokenMarkdownLinks: 'throw',  // WARNING: Please don't change/remove it. It could throw consistency/deployment issues
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'client-name', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  markdown: {
    mermaid: true,
  },
  
  presets: [
    ['./src/presets/multi-docs.js',
      {
        applicationDocs: {
          sidebarPath: require.resolve('./docs/application/sidebars.js'),
          editUrl: "https://repo-remote-url/gestion-digital/development/documentation/edit/main",
          path: 'docs/application',
          routeBasePath: 'application',
        },
        apis: {
          sidebarPath: require.resolve('./api-catalog/sidebars.js'),
          editUrl: "https://repo-remote-url/gestion-digital/development/documentation/edit/main",
          path: 'api-catalog',
          routeBasePath: 'api-catalog',
          docItemComponent: "@theme/ApiItem"
        },
        openapi: {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            openapi: {
              specPath: "api-catalog/openapi",
              outputDir: "api-catalog/docs",
              sidebarOptions: {
                groupPathsBy: "tag",
              }
            }
          }
        },  
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        search: {
          hashed: true,
          language: ['es'],
          docsRouteBasePath: ['docs/application', 'api-catalog'],
          docsDir: ['docs/application', 'api-catalog'],
          docsPluginIdForPreferredVersion: 'applicationDocs'
        }
      },
    ]
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Chupito-Event app',
        logo: {
          alt: 'Mck Logo',
          src: 'img/mck-logo.png',
          srcDark: 'img/mck-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'applicationDocs',
            position: 'left',
            label: 'Aplicación',
          },
          {
            label: "APIs",
            position: "left",
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'apis'
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
                label: 'docs',
                to: '/application/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Git',
                href: 'https://repo-remote-url/gestion-digital/documentation',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} McKinsey & Company. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

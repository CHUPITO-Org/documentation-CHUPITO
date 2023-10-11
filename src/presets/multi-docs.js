module.exports = function preset(context, opts = {}) {
    return {
      themes: [
        ['@docusaurus/theme-classic', opts.theme],
        '@docusaurus/theme-mermaid', 
        ['@easyops-cn/docusaurus-search-local', opts.search],
        'docusaurus-theme-openapi-docs'
      ],
      plugins: [
        ['@docusaurus/plugin-content-pages', {...opts.pages, id: 'pages'}],
        ['@docusaurus/plugin-content-docs', {...opts.applicationDocs, id: 'applicationDocs'}],
        ['@docusaurus/plugin-content-docs', {...opts.apis, id: 'apis'}],
        ['docusaurus-plugin-openapi-docs', {...opts.openapi, id: 'openapi'}],
      ],
    };
  };
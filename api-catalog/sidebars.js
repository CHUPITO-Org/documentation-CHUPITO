function sidebaraddApiInfoToSidebarItems(sidebar) {
  const result = sidebar.filter((item) => item.type === 'category' ).map((item) => {
    const infoApiDoc = {
      type: 'doc',
      id: `${item.link.slug.slice(10)}-api`,
      label: 'Información',
    }
    console.log("SIDEBAR--->")
    return { ...item, ...{items:[infoApiDoc,...item.items]} };
  });
  return result;
}

function optionalRequire(moduleName, defaultValue) {
  try { 
    return require(moduleName)
  } catch(ex){
    return [];
  }
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    default: [
      {
          type: 'doc',
          id: 'intro',
          label: 'Introducción',
      },
      ...sidebaraddApiInfoToSidebarItems(optionalRequire("./docs/sidebar.js", []))
    ]
  };
  
  module.exports = sidebars;
  
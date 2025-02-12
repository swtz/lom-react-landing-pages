import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = { data: [] }) => {
  return pagesData.data.map((data) => {
    const {
      footer_text: footerHtml = [],
      slug = '',
      title = '',
      sections = [],
      menu = { logo: { data: null } },
    } = data.attributes;

    return {
      footerHtml: String(
        footerHtml.map((item) => {
          const {
            children: [{ text = '' }],
          } = item;
          return text;
        }),
      ),
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

// Inspect the return of 'mapData' with 'node.js':
// const { inspect } = require('util');
// const dados = require('./dados.json');
// console.log(inspect(mapData(dados), null, null, true));

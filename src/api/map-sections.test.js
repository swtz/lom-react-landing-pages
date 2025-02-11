import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should return a predefined object if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns if there is data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'this is the title of the section',
      description: 'Lorem ipsum dolor sit amet.',
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('Lorem ipsum dolor sit amet.');
    expect(data.title).toBe('this is the title of the section');
  });

  it('should map section content', () => {
    const section = mapSectionContent();
    /*
    {
      "id": 1,
      "__component": "section.section-content",
      "title": "Olá, mundo!",
      "content": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "<h1>Hello, world!</h1>\n\n<p>Lorem ipsum dolor sit amet.</p><p>Est quia optio aut soluta quia sit enim illo ea consequatur quia id iure sunt hic quam unde hic tempore quis. Quo vitae magni et quibusdam delectus ut earum mollitia et reiciendis inventore id illum itaque et voluptatem quia qui dolore doloribus.",
              "type": "text"
            }
          ]
        }
      ],
      "metadata": {
        "id": 3,
        "name": "intro",
        "section_id": "intro",
        "background": false
      }
    }*/
  });
});

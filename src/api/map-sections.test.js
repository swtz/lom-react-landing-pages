import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const fakeData = pagesFakeData.data[0].attributes.sections;
    const data = mapSections(fakeData);
    expect(data[0].component).toEqual('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid and image_grid', () => {
    const withNoImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{ image: { data: [{ attributes: {} }] } }],
      },
    ]);
    expect(withNoImageGrid.length).toBe(1);

    const withNoTextGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{ title: undefined, description: undefined }],
      },
    ]);
    expect(withNoTextGrid.length).toBe(1);
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

  it('should map section content if no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Olá, mundo!',
      content: [
        {
          children: [
            {
              text: '<h1>Hello, world!</h1>',
              type: 'text',
            },
          ],
        },
      ],
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<h1>Hello, world!</h1>');
    expect(data.title).toBe('Olá, mundo!');
  });

  it('should map grid text if no data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.title).toBe('');
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'my grid',
      description: 'A short description.',
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          title: 'Teste 1',
          description: '<p>Rem dolorem minima ea voluptas dolores.</p>',
        },
        {
          title: 'Teste 2',
          description: '<p>Rem dolorem minima ea voluptas dolores.</p> ',
        },
      ],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe(
      '<p>Rem dolorem minima ea voluptas dolores.</p>',
    );
    expect(data.title).toBe('my grid');
    expect(data.description).toBe('A short description.');
  });

  it('should map grid image if no data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.title).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'A short description too.',
      metadata: {
        section_id: 'gallery',
        background: false,
      },
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'space.jpg',
                  url: 'a.svg',
                },
              },
            ],
          },
        },
      ],
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('A short description too.');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('space.jpg');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
  });
});

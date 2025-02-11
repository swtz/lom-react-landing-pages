import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
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
        {
          title: 'Teste 3',
          description: '<p>Rem dolorem minima ea voluptas dolores.</p> ',
        },
      ],
      image_grid: [],
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
});

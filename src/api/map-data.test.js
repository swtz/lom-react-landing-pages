import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data with invalid value', () => {
    const pagesData = mapData(undefined);
    expect(pagesData).toEqual([]);
  });

  it('should map data even if there is no data', () => {
    const pagesData = mapData({ data: [{ attributes: {} }] })[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if data there are data', () => {
    const pagesData = mapData({
      data: [
        {
          attributes: {
            footer_text: [{ children: [{ text: '<p>Hey</p>' }] }],
            slug: 'slug',
            title: 'title',
          },
        },
      ],
    })[0];
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});

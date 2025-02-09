import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if where is no data', () => {
    const pagesData = mapData({ data: [{ attributes: {} }] })[0];
    expect(pagesData.footerHtml).toEqual([]);
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });

  it('should map data if data there are data', () => {
    const pagesData = mapData({
      data: [
        {
          attributes: {
            footer_text: [{ children: [{ text: '<p>Hey</p>' }] }],
            slug: 'slug',
            title: 'title',
            sections: [1, 2, 3, 4],
            menu: { a: 'b' },
          },
        },
      ],
    })[0];
    expect(pagesData.footerHtml).toEqual([
      { children: [{ text: '<p>Hey</p>' }] },
    ]);
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ a: 'b' });
  });
});

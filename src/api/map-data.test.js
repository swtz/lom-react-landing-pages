import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if where is no data', () => {
    const pagesData = mapData();
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });
});

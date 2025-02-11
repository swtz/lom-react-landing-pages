export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: {
      data: {
        attributes: { url: srcImg = '' },
      },
    } = { data: { attributes: {} } },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: [
      {
        children: [{ text: html = '' }],
      },
    ] = [{ children: [{}] }],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  /* 
  {
    "id": 1,
    "__component": "section.section-grid",
    "title": "my grid",
    "description": "A short description.",
    "metadata": {
      "id": 2,
      "name": "grid-one",
      "section_id": "grid-one",
      "background": true
    },
    "text_grid": [
      {
        "id": 1,
        "title": "Teste 1",
        "description": "Lorem ipsum dolor sit amet. Aut voluptatem eius et suscipit omnis et galisum officia sed dolorem internos. Qui quia dolor ut natus numquam non dolores vero aut aliquid expedita ut eligendi accusantium! </p><p>Rem dolorem minima ea voluptas dolores est maxime nihil vel unde repellendus ut rerum porro sit consequuntur aliquid. Aut neque possimus sed explicabo dolor est consequatur alias aut rerum perferendis ut dolor impedit cum aliquam autem. </p><p>Qui excepturi quis est quia numquam et omnis voluptatum aut deserunt quis sit recusandae corrupti et consequatur modi est officia quia. Sit sunt voluptatibus et cupiditate dolore sed quos esse. "
      },
      {
        "id": 2,
        "title": "Teste 2",
        "description": "Lorem ipsum dolor sit amet. Aut voluptatem eius et suscipit omnis et galisum officia sed dolorem internos. Qui quia dolor ut natus numquam non dolores vero aut aliquid expedita ut eligendi accusantium! </p><p>Rem dolorem minima ea voluptas dolores est maxime nihil vel unde repellendus ut rerum porro sit consequuntur aliquid. Aut neque possimus sed explicabo dolor est consequatur alias aut rerum perferendis ut dolor impedit cum aliquam autem. </p><p>Qui excepturi quis est quia numquam et omnis voluptatum aut deserunt quis sit recusandae corrupti et consequatur modi est officia quia. Sit sunt voluptatibus et cupiditate dolore sed quos esse. "
      },
      {
        "id": 3,
        "title": "Teste 3",
        "description": "Lorem ipsum dolor sit amet. Aut voluptatem eius et suscipit omnis et galisum officia sed dolorem internos. Qui quia dolor ut natus numquam non dolores vero aut aliquid expedita ut eligendi accusantium! </p><p>Rem dolorem minima ea voluptas dolores est maxime nihil vel unde repellendus ut rerum porro sit consequuntur aliquid. Aut neque possimus sed explicabo dolor est consequatur alias aut rerum perferendis ut dolor impedit cum aliquam autem. </p><p>Qui excepturi quis est quia numquam et omnis voluptatum aut deserunt quis sit recusandae corrupti et consequatur modi est officia quia. Sit sunt voluptatibus et cupiditate dolore sed quos esse. "
      }
    ],
    "image_grid": []
  }
  */

  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    description,
    grid,
    background,
    sectionId,
  };
};

export const mapImageGrid = () => {};

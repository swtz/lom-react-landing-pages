export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section) => {
  /* 
    {
      "__component": "section.section-two-columns",
      "title": "this is the title of the section",
      "description": "Lorem ipsum dolor sit amet. Aut voluptatem eius et suscipit omnis et galisum officia sed dolorem internos. Qui quia dolor ut natus numquam non dolores vero aut aliquid expedita ut eligendi accusantium! </p><p>Rem dolorem minima ea voluptas dolores est maxime nihil vel unde repellendus ut rerum porro sit consequuntur aliquid. Aut neque possimus sed explicabo dolor est consequatur alias aut rerum perferendis ut dolor impedit cum aliquam autem. </p><p>Qui excepturi quis est quia numquam et omnis voluptatum aut deserunt quis sit recusandae corrupti et consequatur modi est officia quia. Sit sunt voluptatibus et cupiditate dolore sed quos esse.",
      "image": {
        "data": {
          "attributes": {
            "url": "/uploads/space_5dfb6b4672.jpg",
          }
        }
      },
      "metadata": {
        "section_id": "home",
        "background": true
      }
    }
  */
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

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};

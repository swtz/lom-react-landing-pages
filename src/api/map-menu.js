export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImg = '' } = '',
    menu: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links) => {
  return links;
};

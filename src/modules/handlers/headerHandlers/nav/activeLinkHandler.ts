const activeLinkHandler = (link: string) => {
  const links = document.querySelectorAll<HTMLElement>('.menu__link');
  const currentLink = <HTMLElement>document.querySelector(`.menu__link_${link}`);
  links.forEach((elem) => elem.classList.remove('menu__link_active'));
  currentLink.classList.add('menu__link_active');
};

export default activeLinkHandler;

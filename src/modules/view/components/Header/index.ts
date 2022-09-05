import renderMenu from '../Menu';

const renderHeader = () => `
    <header class="header" id="header"> 
      ${renderMenu()}
    </header> 
  `;

export default renderHeader;

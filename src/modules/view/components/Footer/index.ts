import renderModal from '../Modal';
import './style.scss';

const renderFooter = () => `
    <footer class="footer" id="footer"> 
      <div class="container footer-container">
        <div class="github">
          <a class="link github__sylarbrest" href="https://github.com/sylarBrest"
          target="_blank" rel="noopener noreferrer" title="sylarBrest GitHub"></a>
          <a class="link github__ivankoliada" href="https://github.com/ivanKoliada"
          target="_blank" rel="noopener noreferrer" title="ivanKoliada GitHub"></a>
          <a class="link github__knyazigor" href="https://github.com/knyazigor" 
          target="_blank" rel="noopener noreferrer" title="knyazigor GitHub"></a>
        </div>
        <div class="copyright">
          <a href="/#/team/">
            <span>©</span>
            <span>2022</span>
            <span>Team 48</span>
          </a>
        </div>
        <div class="rss-logo">
          <a href="https://rs.school/js" target="_blank" rel="noopener noreferrer" title="Rolling Scope School"></a>
        </div>
      </div>
    </footer> 
    ${renderModal()}
  `;

export default renderFooter;

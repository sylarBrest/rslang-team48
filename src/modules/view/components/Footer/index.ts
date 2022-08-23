import renderModal from '../Modal';
import './style.scss';

const renderFooter = () => `
    <footer class="footer" id="footer"> 
      <div class="container footer-container">
        <div class="github">
          <a class="link github__sylarbrest" target="_blank" rel="noopener noreferrer" title="sylarBrest GitHub"></a>
          <a class="link github__ivankoliada" target="_blank" rel="noopener noreferrer" title="ivanKoliada GitHub"></a>
          <a class="link github__knyazigor" target="_blank" rel="noopener noreferrer" title="knyazigor GitHub"></a>
        </div>
        <div class="copyright">
          <span>©</span>
          <span>2022</span>
          <span>Team 48</span>
        </div>
        <div class="rss-logo">
          <a href="https://rs.school/js" target="_blank" rel="noopener noreferrer" title="Rolling Scope School"></a>
        </div>
      </div>
    </footer> 
    ${renderModal()}
  `;

export default renderFooter;

import './style.scss';

const renderTeam = () => `
  <section class="container section">
    <h2>О команде</h2>
    <div class="team__header">        
    </div>
    <div class="team__body">      
      <div class="team-card">
        <img class="team-card__image">
        <h3 class="team-card__heading">Aliaksandr Astrouski</h3>
        <h4 class="team-card__subheading">Мастер над командой</h4>
        <p class="team-card__info"></p>        
      </div>
      <div class="team-card">
        <img class="team-card__image"> 
        <h3 class="team-card__heading">Ivan Koliada</h3>
        <h4 class="team-card__subheading">Мастер над бэкендом</h4>
        <p class="team-card__info"></p>        
      </div>
      <div class="team-card">
        <img class="team-card__image"> 
        <h3 class="team-card__heading">Igor Shaymukhametov</h3>
        <h4 class="team-card__subheading">Мастер над стилями</h4>
        <p class="team-card__info">Главная, учебник, окно авторизации</p>        
      </div>
    </div>      
  </section>
`;

export default renderTeam;

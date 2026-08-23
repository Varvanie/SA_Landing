import './Zone3.css';

export default function Zone3() {
  return (
    <section className="zone3">
      <div className="top-text">
        <p>Записаться на пробную версию</p>
      </div>
      <div className="images-row">
        <img src="/SA_Web1.png" alt="SA Web 1" />
        <img src="/SA_Web2.png" alt="SA Web 2" />
      </div>
      <button className="trial-button"><a href="https://vk.com/surveyors_assistant/" target="_blank">Пробная версия</a></button>
    </section>
  );
}
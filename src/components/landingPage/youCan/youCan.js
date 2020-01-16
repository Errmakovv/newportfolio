import React, { PureComponent } from "react";
import './youCan.css';

class YouCan extends PureComponent {
  render() {
    return (<div className = "about-block">
        <h2 className = "about-block__headline">about me</h2>
        <div className = "about-block__info">
          <img className = "about-block__info-img" src="assets/photo.jpg" alt="" />
          <p className = "about-block__info-text">
            Студент 2-го курса БГУИР, специальность АСОИ (ФИТУ). 
            Уже больше года изучаю Front-end. 
            В данный момент оканчиваю курсы по JavaScript от The Rolling Scopes. 
            Хорошо знаком с HTML, CSS, JavaScript. Умею работать с системами контроля версий (GIT). 
            Знаком с React, Webpack, Jest, менеджер пакетов npm. 
            Английский уровня B1.
          </p>
        </div>
    </div>);
  }
}

export default YouCan;
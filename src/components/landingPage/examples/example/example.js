import React, { PureComponent } from "react";
import './example.css';

class Example extends PureComponent {
  render() {
    const { el } = this.props;
    return (<li style = { {backgroundImage: `url(${el.img})`} } className = "example">
         <a className = "example-link"  rel="noopener noreferrer" target="_blank" href={el.link}>
            <h3  className = "example-heading">{el.heading}</h3>
            <p className = "example-text">{el.text}</p>
         </a>
    </li>);
  }
}

export default Example;
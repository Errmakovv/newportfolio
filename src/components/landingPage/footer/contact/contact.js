import React, { PureComponent } from "react";
import './contact.css';

class Contact extends PureComponent {
  render() {
    const { el } = this.props
    return (<li className = "contact">
         <a className = "contact__link" href={el.link}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className={el.icon} aria-hidden="true"></span>
         </a>
    </li>);
  }
}

export default Contact;
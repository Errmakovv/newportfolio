import React, { PureComponent } from "react";
import Contact from "./contact/contact";
import './footer.css';

const contacts = [
  {icon: 'fa fa-vk', link: 'https://vk.com/timur_ermakov2000'},
  {icon: 'fa fa-github', link: 'https://github.com/Errmakovv'},
];

class Footer extends PureComponent {
  render() {
    return (<div className = "footer">
      <p className = "footer__text">Contacts:</p>
      <ul className = "footer__contacts">
        {contacts.map((el, idx) => 
          <Contact el = {el} key = {idx}/>
        )}
      </ul>
    </div>);
  }
}

export default Footer;
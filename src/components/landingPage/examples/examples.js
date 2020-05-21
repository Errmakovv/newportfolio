import React, { PureComponent } from "react";
import Example from "./example/example";
import './examples.css';

const examples = [
  {img: 'assets/theyalow.jpg', heading: 'TheYalow', text: 'Landing page', link: 'https://zen-gates-d3402f.netlify.com/'},
  {img: 'assets/rdp.jpg', heading: 'Repair-design-project', text: 'Adaptive landing page', link: 'https://objective-aryabhata-b74c8c.netlify.com/'},
  {img: 'assets/fw.jpg', heading: 'Fancy-weather', text: 'Weather application', link: 'https://thirsty-beaver-a2ee9f.netlify.com/'},
  {img: 'assets/piskel.jpg', heading: 'Piskel-clone', text: 'Application for creating GIF / APNG animations', link: 'https://flamboyant-benz-3b2ef3.netlify.com/'},
  {img: 'assets/youtube.jpg', heading: 'Simple youtube client', text: 'Simple youtube client(Angular)', link: 'https://friendly-wilson-4fc41d.netlify.app/main'},
  {img: 'assets/library.jpg', heading: 'Online library', text: 'Online library(Angular)', link: 'https://nostalgic-goldwasser-738e83.netlify.app/login'}
];

class Examples extends PureComponent {
  render() {
    return (<div className = "examples-block">
        <h2 className = "examples-block__heading">my works:</h2>
        <ul className = "examples">
          {examples.map((el, idx) => 
            <Example el = {el} key = {idx} />
          )}
        </ul>
    </div>);
  }
}

export default Examples;
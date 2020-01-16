import React, { PureComponent } from "react";
import './general.css';

class General extends PureComponent {
  render() {
    return (<div className = "general">
      <div className = "general__heading">
        <p className = "general__heading-text">The portfolio of</p>
        <p className = "general__heading-name">Timur Yermakou</p>
        <p className = "general__heading-pr">front-end developer</p>
      </div>
    </div>);
  }
}

export default General;
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import ThemeContext from './shared/ThemeContext';
import Clock from './shared/Clock';

export default class AboutSection extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    const legacyDomNode = findDOMNode(this);
    // eslint-disable-next-line no-console
    console.log(legacyDomNode)
  }

  handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('hello')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div style={{border: '1px dashed black', padding: 20}} onClick={this.handleClick}>
            <h3>src/legacy/Greeting.js</h3>
            <h4 style={{color: theme}}>
              This component is rendered by the nested React ({React.version}).
            </h4>
            <Clock />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

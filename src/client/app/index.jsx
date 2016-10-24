import React from 'react';
import {render} from 'react-dom';

class TestApp extends React.Component {
  render () {
    return <p> Works!</p>;
  }
}

render(<TestApp/>, document.getElementById('app'));

import React, { Component } from 'react';

import { Content, Error, Header } from './components';
import { states } from './utils/mocker';
import * as widgetList from './wigets';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pid: 'start',
      widgets: states.init(),
      error: 'keep calm and carry on',

      amount: '',
      inn: '',
      recipientAccountNumber: '',
    };
    this.createWidgets = this.createWidgets.bind(this);
  }

  createWidgets() {
    return this.state.widgets.map(widget => {
      const Widget = widgetList[widget.name];
      return (
        <Widget
          {...widget}
          key={widget.id}
          onChange={(value) => this.setState({ [widget.id]: value })}
          value={this.state[widget.id]}
          state={this.state}
          onNext={(value) => this.setState(value)}
        />
      );
    })
  }

  render() {
    const { widgets, error } = this.state;
    return (
      <div className="App" style={{ flex: 1 }}>
        <Header text={widgets[0].text} error={error} />
        <Error text={error} />
        <Content>
          {this.createWidgets()}
        </Content>
      </div>
    );
  }
}

export default App;

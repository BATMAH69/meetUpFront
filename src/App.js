import React, { Component } from 'react';

import {Content} from './components/Content';
import {states} from './utils/mocker';
import {
  BasicCard,
  BasicSelect,
  BasicTable,
  Buttons,
  ClientInfo,
  Image,
  NextButton,
  Text,
  TextInput,
  Title,
} from './wigets';
import logo from './logo.svg';
import './App.css';

const widgets = {
  BasicCard,
  BasicSelect,
  BasicTable,
  Buttons,
  ClientInfo,
  Image,
  NextButton,
  Text,
  TextInput,
  Title,
  NumberInput: TextInput,
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pid: 'start',
      widgets: states.init(),

      amount:'',
      inn:'',
      recipientAccountNumber:'',
    };
    this.createWidgets = this.createWidgets.bind(this);
  }

  createWidgets(){
    return this.state.widgets.map(widget => {
      const Widget = widgets[widget.name];
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
    return (
      <div className="App" style={{ flex: 1 }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.widgets[0].text}</h1>
        </header>

        <Content>
          {this.createWidgets()}
        </Content>
      </div>
    );
  }
}

export default App;

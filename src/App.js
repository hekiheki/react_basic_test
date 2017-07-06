import React, { Component } from 'react';
import './css/App.css';
import Header from './Header/Header.js';
import Menu from './Header/Menu.js';
import ListBox from './List/ListBox.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      listBoxs: [
        {"id":1,"listTitle":"aaaa1","listItems":[{"id":1,"itemContent":"aaaa1","itemTime":"2011-2-3"},{"id":2,"itemContent":"bbb1","itemTime":"2011-2-3"}]},
        {"id":2,"listTitle":"aaaa2","listItems":[{"id":1,"itemContent":"aaaa2","itemTime":"2011-2-3"},{"id":2,"itemContent":"bbb2","itemTime":"2011-2-3"}]}
      ],
      personNum: "1"
    }
  }
  render() {
    const listBoxs = this.state.listBoxs.map((listBox) => 
      <ListBox key={listBox.id} listTitle={listBox.listTitle} listItems={listBox.listItems} /> 
      );
    return (
      <div className="App">
        <Menu />
        {listBoxs}
      </div>
    );
  }
}

export default App;

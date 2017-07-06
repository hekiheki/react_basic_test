import React,{ Component } from 'react';
import ListTitle from './ListTitle.js';
import ListItem from './ListItem.js';
import './../css/ListBox.css';

class ListBox extends Component { 
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="ListBox">
        <ListTitle listTitle={this.props.listTitle} titleUrl={this.props.titleUrl} />
        <div className="List">
        {
          this.props.listItems.map(item => 
            <ListItem key={item.id} itemContent={item.itemContent} itemTime={item.itemTime} /> 
          )
        }
        </div>
      </div>
    );
  }
}

export default ListBox;
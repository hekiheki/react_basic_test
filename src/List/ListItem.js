import React from 'react';
import './../css/ListBox.css';

const ListItem = (props) => <div className="ListItem"><p><span>•</span>{props.itemContent}</p><time>{props.itemTime}</time></div>

export default ListItem;
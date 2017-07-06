import React,{ Component } from 'react';
import './../css/Menu.css';
import { Router, Route, Link } from 'react-router';
import icon1 from './../images/icon1.png';
import icon2 from './../images/icon2.png';
import icon3 from './../images/icon3.png';
import icon4 from './../images/icon4.png';
import icon5 from './../images/icon5.png';
import icon6 from './../images/icon6.png';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems: [
        {"id":1,"menuName":"menu1","imgUrl":{background: 'url('+icon1+') center center no-repeat'}},
        {"id":2,"menuName":"menu2","imgUrl":{background: 'url('+icon2+') center center no-repeat'}},
        {"id":3,"menuName":"menu3","imgUrl":{background: 'url('+icon3+') center center no-repeat'}},
        {"id":4,"menuName":"menu4","imgUrl":{background: 'url('+icon4+') center center no-repeat'}},
        {"id":5,"menuName":"menu5","imgUrl":{background: 'url('+icon5+') center center no-repeat'}},
        {"id":6,"menuName":"menu6","imgUrl":{background: 'url('+icon6+') center center no-repeat'}}
      ]
    }
  }
  render() {
    return (
      <div className="Menu">
      {
        this.state.menuItems.map( item => 
          <div className="Menu-icon" key={item.id}><i className="iconFont" style={item.imgUrl}></i><span>{item.menuName}</span></div>
        )
      }
      </div>
    );
  }
}

export default Menu;
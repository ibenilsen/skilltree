import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <aside className="menu horizontal">
          <ul className="menu-list">
            <li><a>All time</a></li>
            <li><a>Month</a></li>
            <li><a>Week</a></li>
            <li><a>24hr</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default Sidebar;

import React from 'react';
import '../index.css';
import {
    NavLink
} from "react-router-dom";



class Navigation extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
    curTime : '',

    };


    }
    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }


    render() {

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/main">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active"  to="/claimList">claim List</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active"  to="/claimUpdate/id">Update Claim</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="padd">
                    <div>{this.state.curTime}</div>
                    </li>
                    <li className="padd1">
                  <NavLink className="textdeco" to="/">Logout</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;   

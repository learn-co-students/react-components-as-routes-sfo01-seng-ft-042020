import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

// styling
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}

export default class Navbar extends Component {
    render () {
        return (
            <div>
              <NavLink
                to="/"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{
                    background: 'lightblue'
                }}
              >Home</NavLink>
              <NavLink
                to="/about"
                exact
                style={link}
                activeStyle={{
                    background: 'lightblue'
                }}
              >About</NavLink>
              <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                    background: 'lightblue'
                }}
              >Login</NavLink>
              <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                    background: 'lightblue'
                }}
              >Signup</NavLink>
              <NavLink
                to="/messages"
                exact
                style={link}
                activeStyle={{
                    background: 'lightblue'
                }}
              >Messages</NavLink>
            </div>  
        )
    }
}
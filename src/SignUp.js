import React, { Component } from 'react'

export class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>SignUp</h1>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Submit" />
        </form>;
      </div>
    )
  }
}

export default SignUp

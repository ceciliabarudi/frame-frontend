import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    email: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
   
    auth.signup({ username, email, password })
      .then( (user) => {
        this.setState({
            username: "",
            email: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => console.log(error.response) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have an account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);
import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitClick = () => {
    if (this.state.username === "world" && this.state.password === "123") {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.loggedIn ? "Logged In" : "Logged Out"}</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="type..."
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="type..."
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <button name="submit" onClick={this.submitClick}>
          Login
        </button>
      </div>
    );
  }
}

export default Form;

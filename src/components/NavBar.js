import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 2rem;
  align-self: right;
`

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h1>EXPAT JOURNAL</h1>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </Link>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              {/* <Link to="/">Home</Link> */}
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              
            </li>
          </ul>
          <Link to='/stories/add'>
          <Button>Add Story</Button>
          </Link>
        </div>
      </nav>
    );
  }
}

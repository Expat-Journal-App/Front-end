import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.a`
    color: white;
    border: 2px solid white;
    text-decoration: none;
    padding: 6px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    align-self: right;
    height: 1.8rem;
    margin-right: 1rem;
    font-size: 1.4rem;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
`;

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <header>
          <Link to='/'>
          <h2 className='nav-heading'>EXPAT JOURNAL</h2>
          </Link>
          <div className='buttons-nav'>
          <Link to='/stories'>
          <Button>All Stories</Button>
          </Link>
          <Link to='/stories/add'>
          <Button>Add Story</Button>
          </Link>
          </div>
        </header>
      </div>
    );
  }
}

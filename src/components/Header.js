import React from "react";



import "./Header.css";
import Links from "./Links";

import { Link } from "react-router-dom";
import styled from 'styled-components';
// const styledLink = styled.a`
//     text-decoration: none;
//     padding: 0 10px;
// `


function Header(props) {

  return <header>{
    <section className='header'>
      <h1>
        Fruit Emporium
      </h1>
      <div className='headerLinksDiv'>
        <Links 
          linkTitle= 'Home'
          linkAddress= '/'>
        </Links>

        <SetLink to="/about">About</SetLink>
        {/* <Links 
          linkTitle= 'About'
          linkAddress= '/about'>
        </Links> */}
      </div>
    </section>
  }</header>;
}
const SetLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
`;
export default Header;
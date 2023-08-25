<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  color: ${props => props.theme.lightGray};
  height: 44px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
`

function Header() {
    return (
        <div>
            
        </div>
    );
}

export default Header;
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LinkItems } from "./LinkItems";
import { NavContainer, Content, Logo, Links, LinkSign } from "GlobalStyle";

function Header() {
  return (
    <>
      <NavContainer>
        <Content>
          <a href="/">
            <Logo />
          </a>
          <Links>
            {LinkItems.map((item, index) => (
              <li key={index}>
                <a className="link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </Links>
          <LinkSign>
            <li>
              <a className="link" href="/login">로그인</a>
              <span className="vl" />
              <a className="link" href="/signup">회원가입</a>
            </li>
          </LinkSign>
        </Content>
      </NavContainer>
    </>
  );
}

export default Header;
>>>>>>> 0afc06e5c373d44843d3db20869edf33d4f3ccfe

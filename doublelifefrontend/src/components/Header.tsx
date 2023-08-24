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

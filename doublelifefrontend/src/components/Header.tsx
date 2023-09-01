import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LinkItems } from "./LinkItems";
import { NavContainer, Content, Logo, Links, LinkSign } from "GlobalStyle";

function Header() {
  let [btnActive, setBtnActive] = useState(4);

  const toggleActive = (index: React.SetStateAction<number>) => {
    setBtnActive(index);
  };

  return (
    <>
      <NavContainer>
        <Content>
          <a href="/">
            <Logo />
          </a>
          <Links>
            {LinkItems.map((item, index) => (
              <li value={index}>
                <a className={(index === btnActive ? "link active" : "link")} href={item.url}
                onClick={() => toggleActive(index)}>
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
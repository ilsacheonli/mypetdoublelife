import React, { useEffect, useState } from "react";
import { LinkItems } from "./LinkItems";
import { NavContainer, Content, Logo, Links, LinkSign } from "GlobalStyle";

function Header() {
  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (index: React.SetStateAction<number>) => {
    console.log("toggleActive index: " + index);
    console.log("toggleActive btnActive: " + btnActive);
    setBtnActive(index);
  };

  useEffect(() => {
    console.log("useEffect: " + btnActive);
  }, []);

  return (
    <>
      <NavContainer>
        <Content>
          <a href="/">
            <Logo />
          </a>
          <Links>
            {LinkItems.map((item, index) => (
              <ul>
                <li key={item.url} value={index}>
                  <a 
                    // className={index === btnActive ? "active" : ""}
                    //className={`${btnActive == index && 'active'}`}
                    onClick={() => {
                      console.log("onClick: "+ index)
                      //console.log(index.target.value)
                      // toggleActive(index)
                      setBtnActive(index)
                    }}
                    // className={index === btnActive ? "active" : ""}
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              </ul>
            ))}
          </Links>
          <LinkSign>
            <li>
              <a className="link" href="/login">
                로그인
              </a>
              <span className="vl" />
              <a className="link" href="/signup">
                회원가입
              </a>
            </li>
          </LinkSign>
        </Content>
      </NavContainer>
    </>
  );
}

export default Header;
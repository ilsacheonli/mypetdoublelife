import React, { useEffect, useState } from "react";
import { LinkItems } from "./LinkItems";
import { NavContainer, Content, Logo, Links, LinkSign } from "GlobalStyle";
import axios from "axios";
import {response} from "express";

function Header() {
  const [btnActive, setBtnActive] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();


  // 로그아웃 버튼 클릭 시 실행될 함수입니다~~
  function handleLogout(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    
    // 사용자 로그아웃 상태로 변경
    setIsLoggedIn(false);

    axios
        .get('/logout')
        .then(() => {
          window.location.href = "/login";
        })
        .catch(function (error) {
          console.log(error);
        })

    // 세션스토리지에서 로그인 정보를 제거
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem('id');

    // 로그아웃후 로그인창으로 이동
    window.location.href = "/login";
  }


  useEffect(() => {
    // 이 부분에서 로그인 상태를 확인하고, 예를 들어 세션 스토리지에 로그인 정보가 있는지 검사합니다.
      if (!isLoggedIn){
        axios.get('/loginCheck').then((res)=>{
          if(res.data){
            setIsLoggedIn(true);
          }else{
            setIsLoggedIn(false);
            sessionStorage.removeItem("loggedIn");
            sessionStorage.removeItem('id');
          }
        })
      }

  }, [isLoggedIn]);

  const toggleActive = (index: React.SetStateAction<number>) => {
    console.log("toggleActive index: " + index);
    console.log("toggleActive btnActive: " + btnActive);
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
            <ul key={index}>
             <li>
              <a
                className={index === btnActive ? "active" : ""}
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          </ul>
        ))}

            {/*{LinkItems.map((item, index) => (
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
            ))}*/}

          </Links>
          <LinkSign>
            <li>
              {isLoggedIn ? (
                <>
                  <a className="link" href="/logout" onClick={handleLogout}>
                    로그아웃
                  </a>
                  <span className="vl" />
                  <a className="link" href="/profile">
                    프로필
                  </a>
                </>
              ) : (
                <>
                  <a className="link" href="/login">
                    로그인
                  </a>
                  <span className="vl" />
                  <a className="link" href="/signup">
                    회원가입
                  </a>
                </>
              )}
            </li>
          </LinkSign>
        </Content>
      </NavContainer>
    </>
  );
}

export default Header;
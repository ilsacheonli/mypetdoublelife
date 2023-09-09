// import React from "react";
import {
  Api,
  Apilogin,
  Apss,
  Apw,
  BottomButton,
  Catimage,
  Colr,
  Idbox,
  ImageContainer,
  Input,
  InputWrap,
  Loginpage,
  Logo,
  Petimage,
} from "./login.style";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
  };

// function Login() {
  return (
    <Loginpage>
      <Petimage>
        <ImageContainer>
          <Link to={`/`}>
            <Catimage alt="logo_final" src="/loginimg/logo_final.png" />
          </Link>
        </ImageContainer>
        <Idbox>
          <InputWrap>
            <Input  value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="아이디"></Input>
          </InputWrap>
          <InputWrap>
            <Input  value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></Input>
          </InputWrap>
          <BottomButton onClick={handleLogin}>로그인</BottomButton>
        </Idbox>
        <Apilogin>
          <tr>
            <Logo>
              <Apw
                alt="naver_login_white"
                width="60"
                height="60"
                src="/loginimg/naver_login_white.png"
              ></Apw>
            </Logo>
            <Logo>
              <Apss
                alt="google_login"
                width="60"
                height="60"
                src="/loginimg/google_login.png"
              ></Apss>{" "}
            </Logo>
            <Logo>
              <Api
                alt="kakao_login"
                width="60"
                height="60"
                src="/loginimg/kakao_login.png"
              ></Api>
            </Logo>
          </tr>
        </Apilogin>

        <Apilogin>
          <tr>
            <td>
              <img
                alt="footprint"
                width="20"
                height="20"
                src="/loginimg/footprint.png"
              />
            </td>
            <td>
                <Link to={`/signup`} style={{
                  textDecoration:"none",
                  color:"#000000"
                }}>
                <Colr>회원가입 </Colr>
                </Link>
                하러가기!
            </td>
          </tr>
        </Apilogin>
      </Petimage>
    </Loginpage>
  );
}

export default Login;

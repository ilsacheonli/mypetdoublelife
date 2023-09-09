import { Loginpage, Petimage, ImageContainer, Catimage, Idbox, InputWrap, Input, BottomButton, Apilogin, Apw, Apss, Api, Colr, Logo } from "pages/login/login.style";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

const handleRegister = () => {
    // 각 입력 필드의 빈 값 체크
    if (name.trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (username.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (email.trim() === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
      if (birthdate.trim() === "") {
        alert("생년월일을 입력해주세요.");
        return;
      }
  
      // 모든 입력 필드가 빈 값이 아닌 경우, 등록 로직을 수행하거나 다른 작업을 수행할 수 있습니다.
    };
  
// function Signup() {
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
            <Input value={name}
          onChange={(e) => setName(e.target.value)} placeholder="이름"></Input>
          </InputWrap>
          <InputWrap>
            <Input value={username}
          onChange={(e) => setUsername(e.target.value)} placeholder="아이디"></Input>
          </InputWrap>
          <InputWrap>
            <Input value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></Input>
          </InputWrap>
          <InputWrap>
            <Input  value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="이메일"></Input>
          </InputWrap>
          <InputWrap>
            <Input  value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)} placeholder="생년월일"></Input>
          </InputWrap>

          <BottomButton onClick={handleRegister}>회원가입</BottomButton>
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
                <Link to={`/login`} style={{
                  textDecoration:"none",
                  color:"#000000"
                }}>
                <Colr>로그인 </Colr>
                </Link>
                하러가기!
            </td>
          </tr>
        </Apilogin>
      </Petimage>
    </Loginpage>
  );
}

export default Signup;
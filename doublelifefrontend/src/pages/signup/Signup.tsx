import { Loginpage, Petimage, ImageContainer, Catimage, Idbox, InputWrap, Input, BottomButton, Apilogin, Apw, Apss, Api, Colr, Logo } from "pages/login/login.style";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
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
            <Input placeholder="이름"></Input>
          </InputWrap>
          <InputWrap>
            <Input placeholder="아이디"></Input>
          </InputWrap>
          <InputWrap>
            <Input placeholder="비밀번호"></Input>
          </InputWrap>
          <InputWrap>
            <Input placeholder="이메일"></Input>
          </InputWrap>
          <InputWrap>
            <Input placeholder="생년월일"></Input>
          </InputWrap>

          <BottomButton>회원가입</BottomButton>
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
  import React, { useState, ChangeEvent } from 'react';
  import axios from 'axios';
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

  axios.defaults.withCredentials = true;

  const API_BASE_URL = 'http://localhost:8080';

  const MemberAPI = {
    login: (id: string, pwd: string) => {
      return axios.post(`${API_BASE_URL}/login`, { id: id, pwd: pwd }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
    },
  };
  
  function Login() {
    const [id, setId] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
  
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
      setId(e.target.value);
    };
  
    const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPwd(e.target.value);
    };
  
    const handleLogin = () => {
      // ID를 입력하지 않았을 때 알림 창 표시
      if (id === '') {
        alert('ID를 입력해주세요.');
        return;
      }
      // 비밀번호를 입력하지 않았을 때 알림 창 표시
      if (pwd === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }
      MemberAPI.login(id, pwd)
        .then((response) => {
          console.log('로그인 성공', response.data);
          sessionStorage.setItem('loggedIn', 'true');
          sessionStorage.setItem('id', response.data);
          setLoggedIn(true);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error('로그인 실패', error);
          alert('등록되지 않은 ID 이거나 ID 또는 비밀번호를 잘못 입력했습니다.');
        });
    };

    return (
          <Petimage>
            <ImageContainer>
              <Catimage alt="logo_final" src="/loginimg/logo_final.png" />
            </ImageContainer>
            <Idbox>
              <InputWrap>
                <Input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={handleIdChange}
                />
              </InputWrap>
              <InputWrap>
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={pwd}
                    onChange={handlePwdChange}
                />
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
                  ></Apss>{' '}
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
                    <Colr>회원가입</Colr> 하러가기!
                  </Link>
                </td>
              </tr>
            </Apilogin>
          </Petimage>
    );
  }

  export default Login;
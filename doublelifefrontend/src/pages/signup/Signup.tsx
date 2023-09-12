import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  Loginpage,
  Petimage,
  ImageContainer,
  Catimage,
  Idbox,
  InputWrap,
  Input,
  BottomButton,
  Apilogin,
  Apw,
  Apss,
  Api,
  Colr,
  Logo,
  Buttonbox 
} from "pages/login/login.style";

function Signup() {
  const [formData, setFormData] = useState({
    memName: "",
    memId: "",
    memPwd: "",
    memPwdConfirm: "",
    memEmail: "",
    memBirth: ""
  });

  const navigate = useNavigate();
  const [isIdDuplicate, setIsIdDuplicate] = useState(false); //default 값을 false로설정 (중복체크로직)
  const [isCheckingDuplicate, setIsCheckingDuplicate] = useState(false); //중복 체크 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckDuplicate = () => {
    setIsCheckingDuplicate(true);

    fetch("/checkDuplicateID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ memId: formData.memId }) // JSON 형식으로 아이디를 전달
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("중복 체크 요청에 실패했습니다.");
        }
      })
      .then((data) => {
        setIsCheckingDuplicate(false);
        if (data) {
          setIsIdDuplicate(true);
          alert("중복된 ID 입니다. 다른 아이디를 사용하세요.");
        } else {
          setIsIdDuplicate(false);
          alert("사용가능한 아이디 입니다.");
        }
      })
      .catch((error) => {
        setIsCheckingDuplicate(false);
        console.error("Error:", error);
        alert("중복 체크 요청에 실패했습니다.");
      });
  };

  const handleSignup = () => {
    if (isCheckingDuplicate) {
      alert("중복 체크를 완료해주세요.");
      return;
    }

    if (!formData.memId || !formData.memPwd || !formData.memName || !formData.memEmail || !formData.memBirth) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    if (formData.memPwd !== formData.memPwdConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    if (formData.memPwd.length < 6) {
      alert("비밀번호는 6자리 이상이어야 합니다.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(formData.memEmail)) {
      alert("올바른 이메일 형식을 입력하세요.");
      return;
    }

    fetch("/addmember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          navigate("/SignupFinish", { state: { memName: formData.memName } });
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Loginpage>
      <Petimage>
        <ImageContainer>
          <Link to={`/`}>
            <Catimage alt="logo_final" src="/loginimg/logo_final.png" />
          </Link>
        </ImageContainer>
        <Idbox>
        <InputWrap style={{ display: 'flex', alignItems: 'center', height: '55px' }}>
          <Input
            type="text"
            placeholder="아이디(영문 및 숫자만 가능합니다.)"
            name="memId"
            value={formData.memId}
            pattern="[a-zA-Z0-9]+"
            onChange={handleInputChange}
          />
          <Buttonbox>
            <button onClick={handleCheckDuplicate} style={{ fontSize: '12px', width: '70px', height: '100%' }}>중복확인</button>
            {isIdDuplicate}
          </Buttonbox>
        </InputWrap>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호(6자리 이상만 가능합니다.)"
              name="memPwd"
              value={formData.memPwd}
              onChange={handleInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              name="memPwdConfirm"
              value={formData.memPwdConfirm}
              onChange={handleInputChange}
              />
          </InputWrap>
          <InputWrap>
            <Input
              type="text"
              placeholder="이름"
              name="memName"
              value={formData.memName}
              onChange={handleInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              type="email"
              placeholder="이메일"
              name="memEmail"
              value={formData.memEmail}
              onChange={handleInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              type="date"
              placeholder="생년월일"
              name="memBirth"
              value={formData.memBirth}
              onChange={handleInputChange}
            />
          </InputWrap>

          <BottomButton onClick={handleSignup}>회원가입</BottomButton>
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
              <Link
                to={`/login`}
                style={{
                  textDecoration: "none",
                  color: "#000000"
                }}
              >
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
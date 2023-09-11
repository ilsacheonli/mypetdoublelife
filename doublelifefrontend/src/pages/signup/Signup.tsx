import { Loginpage, Petimage, ImageContainer, Catimage, Idbox, InputWrap, Input, BottomButton, Apilogin, Apw, Apss, Api, Colr, Logo } from "pages/login/login.style";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  // 사용자 입력을 관리할 상태 변수 생성
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    password: "",
    email: "",
    birth: "",
  });

  // 입력 양식 값이 변경될 때마다 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 회원 가입 양식 제출 시 실행
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 백엔드로 회원 가입 요청을 보냄
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 회원 가입 성공 시, 다른 페이지로 리디렉션 또는 성공 메시지 표시 가능
        // 예시: history.push("/login");
        console.log("회원 가입 성공!");
      } else {
        // 회원 가입 실패 시, 에러 처리
        console.error("회원 가입 실패");
      }
    } catch (error) {
      console.error("에러:", error);
    }
  };

  return (
    <div>
      {/* ... */}
      <form onSubmit={handleSubmit}>
        {/* ... */}
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="birth"
          placeholder="생년월일"
          value={formData.birth}
          onChange={handleChange}
        />
        <button type="submit">회원 가입</button>
      </form>
      {/* ... */}
    </div>
  );
}

export default Signup;

import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function LoginCelebrate() {

  const Loginpage=styled.div`
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
    max-width:1500px;
    padding: 0 20px;
    left:50%;
    transform: translate(-50%,0);
    
    overflow:hidden;
    display:flex;
    flex-direction:column;
    
    `
    const Petimage=styled.div`
    
    text-align:center;
    background-size : cover;
    background-position : center;
    `
    const Catimage=styled.img`
    width:400;
    
    `
    const BottombuttonA=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width:30%;
    height:100px;
    border: 4px solid #063160;
    font-weight:700;
    background-color: white;
    border-radius:10px;
    color: #063160;
    margin-top:8px;
    margin-bottom:16px;
    cursor:pointer;
    `
    const StyledButton = styled.button`
    &:hover {
        background-color:#063160;
        color: white; /* 마우스를 올렸을 때 배경색 변경 */
      }
    `
    const BottombuttonB=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width:30%;
    height:100px;
    border: 4px solid #063160;
    font-weight:700;
    background-color:#063160;
    border-radius:10px;
    color: white;
    margin-top:8px;
    margin-bottom:16px;
    cursor:pointer;
    `
    
    const ImageContainer = styled.div`
    margin-top:50px;
    margin-bottom:-30px;
    `
    const Menu =styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    
    `
    const Colr=styled.span`
    color: #063160;
    ` 
    const CongratsImage = styled.img`
    width: 400px; /* 이미지 크기 조절 */
    position: absolute;
    bottom: 20px;
    right: 20px;
    margin-bottom: -10px;
    /* 이미지를 좌우로 반전시킵니다. */
    transform: scaleX(-1);
    
    @media (max-width: 1400px) {
    display: none; /* 작은 화면에서 이미지 숨김 */
    }
    
    `;
    const AdditionalImage = styled.img`
      width: 400px; /* 이미지 크기 조절 */
      position: absolute;
      bottom: 20px;
      left: 20px;
      margin-bottom: -10px;
    
      @media (max-width: 1400px) {
      display: none; /* 작은 화면에서 이미지 숨김 */
      }
    `
    
    
    
    return(
    <Loginpage>
        <Petimage>
       <h1>이파일 아닙니다 !!!!sign up finsish파일이 진짜 입니다.</h1>
        <h1><Colr>ooo님</Colr> 가입을 축하합니다!</h1>
        <h1><Colr>로그인</Colr> 후 서비스를 이용해주세요.</h1>
        </Petimage>
        <Menu>
              {/* <Link to={`/login`} style={{
                  textDecoration:"none",
                  color:"#000000"
                }}>  */}
                <tr>
                <td>
                <Link to={`/signup`} style={{
                  textDecoration:"none",
                  color:"#000000"
                }}>
                    <BottombuttonA>  로그인하러가기!</BottombuttonA>
                    </Link>
                    </td>
                    </tr>
{/*             </td        
                    <Link/>  */}
            <BottombuttonA>메인으로</BottombuttonA>
            <BottombuttonB>마이펫의 이중생활이란?</BottombuttonB>
            
        </Menu>  
        <AdditionalImage src="/loginimg/signup_logo.png" alt="signup_logo"></AdditionalImage>
        <CongratsImage src="/loginimg/signup_logo.png" alt="signup_logo"> 
        </CongratsImage>
    
    </Loginpage>
    
    );
    }

export default LoginCelebrate;
      
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
function SignupFinish() {
    const Loginpage=styled.div`
    text-align: center;
    background-size: cover;
    background-position: center;
    width: 100%;
    
    
    `// position: absolute;
    // padding-top: 0;
    // width: 100%;
    // max-width: 1500px;
    // padding: 0 20px;
    // left: 50%;
    // transform: translate(-50%, 0);
  
    // overflow: hidden;
    // display: flex;
    // flex-direction: column;
    
 
    // position: absolute;
    const Petimage=styled.div`
    
    text-align:center;
    background-size : cover;
    background-position : center;
    `
    const Catimage=styled.img`
   
    
    `
    const BottombuttonC=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width:18%;
    height:35%;
    border: 2px solid #063160;
    font-weight:700;
    background-color: white;
    border-radius:10px;
   

    cursor:pointer;
    margin-top:4px;
    margin-bottom:8px;
 
    `
    // &:hover {
    //   background-color:#063160;
    //   color: white; /* 마우스를 올렸을 때 배경색 변경 */
    // }
    const BottombuttonA=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width:18%;
    height:35%;
    border: 2px solid #063160;
    font-weight:700;
    background-color: white;
    border-radius:10px;
    color: #063160;

    cursor:pointer;
    margin-top:4px;
    margin-bottom:8px;
  
    `
    // &:hover {
    //   background-color:#063160;
    //   color: white; /* 마우스를 올렸을 때 배경색 변경 */
    // }
   
    const BottombuttonB=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width:18%;
    height:35%;
    border: 4px solid #063160;
    font-weight:700;
    background-color:#063160;
    border-radius:10px;
    color: white;
    cursor:pointer;
    margin-top:4px;
    margin-bottom:8px;
    `
    // 
    
    const ImageContainer = styled.div`
    margin-top:0px;
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
    width: 150px; /* 이미지 크기 조절 */
    position: absolute;
    bottom: 110px;
    right: 400px;
    margin-bottom: -10px;
    /* 이미지를 좌우로 반전시킵니다. */
    transform: scaleX(-1);
    
    @media (max-width: 1400px) {
    display: none; /* 작은 화면에서 이미지 숨김 */
    }
    
    `;
    const AdditionalImage = styled.img`
      width: 150px; /* 이미지 크기 조절 */
      position: absolute;
      bottom: 110px;
      left: 400px;
      margin-bottom: -10px;
    
      @media (max-width: 1400px) {
      display: none; /* 작은 화면에서 이미지 숨김 */
      }
    `
    const Main = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

    
    
    return(
      <Main>
    <Loginpage>
        <Petimage>
        <ImageContainer>
        <Catimage alt="logo_final" src="/loginimg/logo_final.png" />
        </ImageContainer>
        <h3><Colr>ooo님</Colr> 가입을 축하합니다!</h3>
        <h3><Colr>로그인</Colr> 후 서비스를 이용해주세요.</h3>
        </Petimage>
        <Menu>
          
            <BottombuttonA> <Link to={`/login`} style={{
                  textDecoration:"none",
                  color:"#063160"
                }}>    로그인 하러가기!   </Link></BottombuttonA>
         
           
         
            <BottombuttonC><Link to={'/'} style={{
                  textDecoration:"none",
                  color:"#063160"
                }}>    메인으로 GO GO  </Link> </BottombuttonC>
           
          
            <BottombuttonB>
              <Link to={`/userpage`} style={{
                  textDecoration:"none",
                  color:"#ffffff"
                }}>    마이펫의 이중생활이란?    </Link></BottombuttonB>
          
        </Menu>  
        <AdditionalImage src="/loginimg/signup_logo.png" alt="signup_logo"></AdditionalImage>
        <CongratsImage src="/loginimg/signup_logo.png" alt="signup_logo"> 
        </CongratsImage>
    
        </Loginpage>
        </Main>
    )
    
}

export default SignupFinish;
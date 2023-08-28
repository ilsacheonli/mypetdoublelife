import React from 'react';
import styled from 'styled-components';

function Signup() {
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

const InputWrap=styled.div`
display:flex;
border-radius:8px;
padding:16px;
margin-top:8px;
background-color:white;
border: 2px solid #063160;
width:30%;
` 

const BottomButton=styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 10px 20px;
width:32.3%;
height:48px;
border:none;
font-weight:700;
background-color: #063160;
border-radius:10px;
color: white;
margin-top:8px;
margin-bottom:16px;
cursor:pointer;
`

const Petimage=styled.div`
text-align:center;
background-size : cover;
background-position : center;
`

const Catimage=styled.img`
width:400; 
height:400; 
`



const Api=styled.img`
    border-radius: 50%;
    border: 2px solid #063160;
    width:60; 
    height:60; 
    display:block;
    margin:auto;
    
`
const Apss=styled.img`
    border-radius: 50%;
    border: 2px solid #063160;
    width:60; 
    height:60;
    
`
const Apw=styled.img`
    border-radius: 50%;
    border: 2px solid #063160;
    width:60; 
    height:60;
    
`
const Logo=styled.td`
    padding:20px;
    justify-content: center;
`



const Idbox=styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
flex-direction: column;
align-items: center;

`
const Apilogin=styled.div`
padding:10px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom:8;
`


const Input = styled.input.attrs({ required: true })`
width:100%;
outline:none;
border:none;
height:17px;
font-size:14px;
font-weight:400;
display: block;
`

const Colr=styled.span`
color: #063160;
`
const ImageContainer = styled.div`
margin-top:50px;
margin-bottom:-30px;
`

    return(
            <Loginpage>
                <Petimage>
                    <ImageContainer>
                    <Catimage alt="logo_final" src="/loginimg/logo_final.png" />
                    </ImageContainer>
                    <Idbox>
                    <InputWrap><Input placeholder="이름"></Input></InputWrap>
                    <InputWrap><Input placeholder="아이디"></Input></InputWrap>
                    <InputWrap><Input placeholder="비밀번호"></Input></InputWrap>
                    <InputWrap><Input placeholder="이메일"></Input></InputWrap>
                    <InputWrap><Input placeholder="생년월일"></Input></InputWrap>
                    
                    
                    <BottomButton>
                        회원가입
                    </BottomButton>
                    </Idbox>
                    <Apilogin>
                        
                        <tr>
                        <Logo> 
                        <Apw alt="naver_login_white" width="60" height="60" src="/loginimg/naver_login_white.png"></Apw>
                        </Logo>
                        <Logo>
                        <Apss alt="google_login"  width="60" height="60"  src="/loginimg/google_login.png"></Apss> </Logo>
                        <Logo>
                        <Api alt="kakao_login" width="60" height="60" src="/loginimg/kakao_login.png"></Api>
                            
                        </Logo>    

                        </tr>
                        
                    </Apilogin>
                
                
                <Apilogin>
                    
                        <tr>
                            <td><img alt="footprint" width="20" height="20" src="/loginimg/footprint.png" /></td>
                            <td><Colr >로그인</Colr> 하러가기!</td>
                        </tr>
                            
                </Apilogin>
                </Petimage>
            </Loginpage>
            )}

export default Signup;
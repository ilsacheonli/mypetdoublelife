import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
function Errorpagefive(){
    const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* 화면 전체 높이만큼 중앙에 정렬 */
  `;
  
    const Errorimg= styled.img`
    max-width: 100%;
    height: auto;
    margin-top: 20px;`
    
    const RoundButton = styled.a`
    margin-bottom:50px;
    display: inline-block;
    padding: 10px 20px; /* 버튼 크기 조절 */
    background-color: #000; 
    color: #fff; 
    border-radius: 50%; /* 동그란 모양 */
    text-decoration: none; /* 링크 밑줄 제거 */
    font-weight: bold; /* 텍스트 굵게 */
    transition: background-color 0.3s ease; /* 배경색 변경 시 부드러운 애니메이션 효과 */

   &:hover {
    background: linear-gradient(45deg, #FF0000, #FFA500, #FFFF00, #008000, #0000FF, #800080); /* 마우스 호버 시 색상 변경 */
   }
`;


    return(
        <CenteredContainer>
    <Errorimg alt="error" src="/errorimg/500.png"></Errorimg>
    <Link to={`/`} style={{
                  textDecoration:"none",
                  color:"#000000"
                }}><RoundButton>돌아가기</RoundButton></Link>
    </CenteredContainer>
    
    )

}
export default Errorpagefive;
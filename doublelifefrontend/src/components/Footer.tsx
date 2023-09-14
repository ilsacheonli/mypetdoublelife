// import React from 'react';

// function Footer() {
//     return (
//         <div>
            
//         </div>
//     );
// }


// export default Footer;

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: "#fffff"; /* 연한 회색 배경색 */
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  padding: 10px;
  
  
`;

const Image = styled.img`
  width: 140px; /* 이미지 크기 조절 */
  height: 75px;
  margin-right: 10px; /* 이미지와 텍스트 간격 조절 */
`;
const TextContainer = styled.div`
  text-align: right; /* 텍스트를 오른쪽으로 정렬 */
`;

const CopyrightText = styled.p`
  color: gray; /* 회색 텍스트 색상 */
  font-size: 14px; /* 글자 크기 조절 */
  text-align: center;
  margin-top: 20px; /* 텍스트를 현재 위치에서 아래로 이동 (원하는 값으로 조절) */
`;
function Footer() {
  return (<div>
    <FooterContainer>
      <Image src="/loginimg/logo_final.png" alt="foot Logo" /><TextContainer>
      <CopyrightText>Copyrightⓒ 2023 by mypetdoublelife all rights reserved</CopyrightText></TextContainer>
      </FooterContainer>
      </div>
  );
}

export default Footer;

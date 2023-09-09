// import React from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import yeji from '../../img/about/yeji.jpg'; // 개발자 1 이미지 경로
import kichan from '../../img/about/kichan.jpg';
import myung from '../../img/about/myung.jpg';
import dong from '../../img/about/donghwan.jpg';
import ji from '../../img/about/ji.jpg';
import sih from '../../img/about/sih.jpg';
import gahyun from '../../img/about/gahyun.jpg';  // 개발자 2 이미지 경로
import { Main, UpimageContainer, Mainimage, Mypetintro, Maintext,Miniimg, TextWithBar,HorizontalBar,Detail,Img, NameBox,FlexBox,GridBox,ImgBox,UserName,Wom,Man,Test,WhiteBox,Description,ImageContainer,TextContainer,
Textsmall,LastBox,ProfileCard,ProfileCard1,Introimg,Pink,Apiimg} from './userpage.style'
 // 개발자 3 이미지 경로해당 형식 선언을 찾을 수 없습니다.ts(2307)
// 나머지 개발자 이미지 경로 추가

function UserPage() {
    const FeatureContainer = styled.div`
  display: flex;

  align-items: center; /* 수직 중앙 정렬 */
`;
// flex-direction: column; /* 컨테이너 내의 요소들을 세로로 나열 */ 
  const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 열로 나눔 */
    gap: 20px; /* 각 칸 사이의 간격 조절 */
  `;
  
  const Feature = styled.div`
    width: 100%; /* 칸의 전체 너비를 사용 */
    padding: 20px;
    
    
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    flex-direction: row; /* 요소들을 가로로 나열 */
    background-color: #e6f1fa;
  `;
  
  const MainFeature = styled.h2`
    color: #6a0dad; /* 보라색 글씨 */
    font-weight: bold; /* 굵게 */
    margin: 0; /* 기본 마진 제거 */
    font-size:20px;
  `;
  
  const Divider = styled.div`
    height: 3px;
    background-color: #6a0dad; /* 보라색 바 */
    margin: 10px 0;
  `;
  
  const FeatureDescription = styled.p`
    margin: 0;
    width:250px; /* 기본 마진 제거 */
    background-color: #e6f1fa;
  `;
  
    interface Pet {
        img:string;
        name: string;
        description: string;
        
      }
        const petData: Pet[] = [
        { img:yeji, name: '예지', description: 'backend' },
        { img:myung, name: '천명', description: 'backend' },
        { img:sih, name: '시현', description: 'frontend' },
        { img:ji, name: '지혜', description: 'backend' },
        { img:dong, name: '동환', description: 'backend' },
        { img:kichan,name: '기찬', description: 'frontend' },
        { img:gahyun,name: '가현', description: 'frontend' },
        
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      
      
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % petData.length);
          }, 3000);
      
          return () => clearInterval(interval);
        }, [petData.length]);
      
  return (
    
      
    
      <Main>
        
        <UpimageContainer>
          <Mainimage alt="mainimage" src="/realaboutimg/funcat.png" />
          <Mypetintro>
          <br/><br/><br/>
          <Maintext> 마이펫의 이중생활의 시작   <Miniimg src="/realaboutimg/twofoot.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar><br></br><br/>
          <Detail>반려동물을 위한 특별한 공간을 마련하기 위한 작은 생각에서 시작되었습니다.
            <br/>당신과 당신의 펫에게 특별한 경험을 제공하기 위해 만들어졌습니다. 
            <br/> 마이펫의 이중생활은 펫과 함께하는 즐거운 시간을 기록하고 나누는 공간으로, 
            <br/>여러분과 여러분의 펫을 위한 완벽한 온라인 공간을 제공합니다. 
          
           
            
          <br/>당신의 펫과의 특별한 순간을 추억하고,
          <br/> 펫 릴레이션쉽을 더욱 깊게 쌓을 수 있도록 노력합니다.

         <br/>
          <br/>펫과의 특별한 순간을 공유하고, 펫 관련 정보를 얻고, 
          <br/>다른 펫 사랑자들과 연결되는 즐거움을 느껴보세요. 
          <br/>
          <br/>지금 바로 가입하고 여러분의 펫과 함께 더 특별한 순간을 만들어보세요. 
          <br/>마이펫의 이중생활, 언제나 여러분과 함께합니다! </Detail>
          </Mypetintro> 
          <br/><br/><br/><br/>
          <Maintext>마이펫 이용 설명서 <Miniimg src="/realaboutimg/twofoot.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar>
          <br/><br/>
          <FeatureContainer>
      {/* 첫 번째 기능 */}
      
      <Feature>
        <img width="50" height="50" src="/realaboutimg/socialing.png" alt="기능 1 사진" />
        <FeatureDescription>
          <MainFeature>1. 🐾 펫 SNS 기능 📸</MainFeature>
          <Divider />
          <small>
          <p><br/>마이펫은 사랑스러운 반려동물을
          <br/> 세상과 공유할 수 있는 곳입니다. 
          <br/> 펫의 일상을 사진과 함께 공유하고, 
          <br/>좋아요와 댓글을 통해 
          <br/>다른 펫 사랑자들과 소통하세요!</p>
          </small>
        </FeatureDescription>
      </Feature>

      {/* 두 번째 기능 */}
      <Feature>
        <img width="50" height="50" src="/realaboutimg/cathospital.png" alt="기능 2 사진" />
        <FeatureDescription>
          <MainFeature>2.  🏥동물병원 찾기 🏥</MainFeature>
          <Divider />
          <small>
          <p><br/>펫의 건강은 우리 모두에게 중요합니다. 
          <br/>'마이펫의 이중생활'은 지도 기반으로 
          <br/>동물병원의 위치와 정보를 확인하고
          <br/>찾아주는 기능을 제공하여
          <br/> 긴급 상황에도 빠른 도움을 
          <br/>받을 수 있도록 합니다. 
          </p>
          </small>
        </FeatureDescription>
      </Feature>

      {/* 세 번째 기능 */}
      <Feature>
        <img width="50" height="50"   src="/realaboutimg/petmunity.png"  alt="기능 3 사진" />
        <FeatureDescription>
          <MainFeature>3. 💬 펫 뮤니티 기능 🤝</MainFeature>
          <Divider />
          <small><p><br/>펫을 사랑하는 사람들의 소중한 공간, 
          <br/>펫 뮤니티에서 다른 펫 맘과 
          <br/>아빠들과의 만남을 즐겨보세요. 
          <br/>경험과 조언을 나누며, 
          <br/>새로운 친구들을 만나보세요. 
          </p></small>
        </FeatureDescription>
      </Feature>
    </FeatureContainer>
    <br/>    <br/>  
    
          <Mypetintro>
          <br/><br/><br/>
          <Maintext> 일사천리 개발자들 <Miniimg src="/realaboutimg/twofoot.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar><br></br><br/>
          <Mainimage width="400px" height="400px" alt="mainimage" src="/realaboutimg/people.jpg" />
          <br/><br/>
          <Detail>  
<br/>프론트엔드 개발자들은 사용자 경험을 최우선으로 생각하며,
<br/> 마이펫 홈페이지를 더욱 편리하고 시각적으로 매력적으로 만들었습니다. 
<br/>TypeScript와 React를 사용하여 사용자 친화적이고 동적인 웹을 개발하고,
<br/> 스타일 컴포넌트를 통해 UI를 디자인하고 관리하고 있습니다. 
<br/><br/>
백엔드 개발자들은 안전하고 효율적인 데이터 처리와 서버 작업을 담당하고 있습니다.
<br/> 데이터베이스와 서버 API를 효율적으로 구축하여 사용자에게 신뢰성 있는 서비스를 제공합니다.
<br/> 사용자 정보의 보안과 개인 정보 보호에 특히 신경을 쓰며, 
<br/>서버 기능을 지속적으로 개선하고 확장하고 있습니다.


<br/><br/>
<br/> 우리 일사천리 팀원들은 함께 일하며 서로의 아이디어를 공유하고 
<br/>지식을 공유하여 마이펫 커뮤니티를 더욱 풍부하게 만들어가고 있습니다. 
<br/> 사용자들의 피드백을 환영하며, 마이펫의 이중생활을 더욱 향상시키기 위해
<br/> 앞으로도 끊임없이 노력하겠습니다.

<br/> 감사합니다. 

           </Detail>
          </Mypetintro> 
          
      <br/><br/><br/>
          </UpimageContainer>
        </Main>
      
 


       
    );
}

export default UserPage;
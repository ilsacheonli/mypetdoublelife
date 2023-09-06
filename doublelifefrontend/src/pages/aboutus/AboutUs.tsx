
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
Textsmall,LastBox,ProfileCard,ProfileCard1,Introimg,Pink,Apiimg} from './aboutus.style'
 // 개발자 3 이미지 경로해당 형식 선언을 찾을 수 없습니다.ts(2307)
// 나머지 개발자 이미지 경로 추가

function AboutUs() 
{ interface Pet {
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
          <Mainimage alt="mainimage" src="/aboutimg/banner.png" />
          <Mypetintro>
          <br/>
          <Maintext><Miniimg src="/aboutimg/king.png"/> 금주의 마이펫 <Miniimg src="/aboutimg/king.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar>
          <Detail>이번 주 제일 HOT한 마이펫을 소개합니다.</Detail>
          <br/>
          </Mypetintro>
          <FlexBox>
          <GridBox>
          <ImgBox><Img  alt="petstar" src="/aboutimg/petstar1.jpg" ></Img>
          </ImgBox>
          <NameBox>
          <UserName>쥬시 <Wom>여</Wom> </UserName>
					
          </NameBox>
          </GridBox>
          <GridBox>
          <ImgBox><Img alt="petstar" src="/aboutimg/petstar2.jpg" ></Img>
          </ImgBox>
          <NameBox>
          <UserName>아랑이 <Wom>여</Wom></UserName>
					
          </NameBox>
          </GridBox>
          <GridBox>
          <ImgBox><Img alt="petstar" src="/aboutimg/petstar3.jpg"></Img>
          </ImgBox>
          <NameBox>
          <UserName>서른 아홉번째 밤 <Man>남</Man></UserName>
					
          </NameBox>
          </GridBox>
          </FlexBox>
          <Description>
          <Mypetintro>
          <br/>
          <Maintext><Miniimg src="/aboutimg/mypet.png"/> 마이펫 소개 <Miniimg src="/aboutimg/mypet.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar>
          <Detail>
          나의 가족을 위해 모든 것을 담고자합니다.</Detail>
          
          </Mypetintro>
        <WhiteBox>
        <ImageContainer>
        <img alt="cat" src="/aboutimg/cathandfinal.jpg"/>
        </ImageContainer> 
          <TextContainer>
            
            <Textsmall>
            마이펫의 이중생활은 펫을 위한 완벽한 온라인 공간을 제공합니다.
            펫과의 특별한 순간을 공유하고, 펫 시설의 정보를 얻고, 다른 펫 사랑자들과 연결되는 즐거움을 느껴보세요.
            마이펫은 펫과 함께하는 모든 순간들을 응원합니다! 
            </Textsmall>
        
          </TextContainer>
          </WhiteBox>
          <br></br>
        </Description>
          <Test>
          <ProfileCard> 
          <Mypetintro>
          <br/>
          <Maintext> 내 근처 동물병원 <Miniimg src="/aboutimg/safe.png"/></Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar>
          <Detail>현재 위치에서 제일 가까운 동물병원을 안내합니다.</Detail>

          </Mypetintro>
          
          
          <LastBox>
          <Apiimg alt="map" src="/aboutimg/apimap.PNG"/>
          </LastBox>
          </ProfileCard>
          <ProfileCard1>
          
          <Mypetintro>
            <br/>
          <Maintext> 마이펫 개발자 <Miniimg src="/aboutimg/notebook.png"/> </Maintext>
          <TextWithBar><HorizontalBar /></TextWithBar>
          <Detail>일사천리 팀원들을 소개합니다.</Detail>
          
          </Mypetintro>
          
          <FlexBox>
          <LastBox>
          <ImgBox>
          <Introimg src={petData[currentIndex].img} />
          </ImgBox>
          <NameBox >
          <UserName><p> {petData[currentIndex].name}    
					<Pink>  {petData[currentIndex].description}</Pink></p></UserName>
          </NameBox>
          </LastBox>
          </FlexBox>
          </ProfileCard1>
          
          </Test> 
          </UpimageContainer>
        </Main>
      
        
  );
}

export default AboutUs;

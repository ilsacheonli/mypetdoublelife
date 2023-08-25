import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

const SwipableCard = styled.div`
  width: 300px;
  height: 100%;
  background-color: lightgray;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  transition: transform 0.9s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
`;

const SwipeButton = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: center;
`;

interface Pet {
  name: string;
  description: string;
}

function About() {
  const petData: Pet[] = [
    { name: 'Cat', description: 'Loves to sleep' },
    { name: 'Dog', description: 'Enjoys long walks' },
    { name: 'Bird', description: 'Loves to sing' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? petData.length - 1 : prevIndex - 1));
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % petData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % petData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [petData.length]);

  return (
    <Container>
      <CardContainer>
        <SwipableCard style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
          <h2>{petData[currentIndex].name}</h2>
          <p>{petData[currentIndex].description}</p>
        </SwipableCard>
      </CardContainer>
      <ButtonContainer>
        <SwipeButton onClick={handleSwipeLeft}>←</SwipeButton>
        <SwipeButton onClick={handleSwipeRight}>→</SwipeButton>
      </ButtonContainer>
      <Description>
        <h3>마이펫의 이중생활</h3>
        <p>
          마이펫의 이중생활은 다양한 모험과 이야기로 가득 찬 흥미진진한 세계입니다.
          각 펫들이 무엇을 하며 어떤 모험을 즐기는지 알아보세요!
        </p>
      </Description>
    </Container>
  );
}

export default About;


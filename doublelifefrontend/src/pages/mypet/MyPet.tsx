import React from 'react';
import MyPetProfile from './MyPetProfile'
import MyPetSwiper from './MyPetSwiper'
import MyPetTeb from './MyPetTeb'

function MyPet() {
	const swiperItems = [
		<div key={1} className="swiper-slide"><MyPetProfile /></div>,
		<div key={2} className="swiper-slide"><MyPetProfile /></div>,
		<div key={3} className="swiper-slide"><MyPetProfile /></div>,
		// 추가적인 슬라이드 아이템들을 배열로 생성
	];
	return (
		<main>
			<MyPetSwiper items={swiperItems} />
			<MyPetTeb />
		</main>
	)
}

export default MyPet;
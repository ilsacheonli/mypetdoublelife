import React, { useEffect, useState } from 'react';
import MyPetProfile from './Mypetprofile';
import MyPetSwiper from './Mypetswiper';
import MyPetTeb from './MyPetTeb';
import axios from 'axios';


function MyPet() {
	const [petNoList, setPetNoList] = useState<number[]>([]);

	useEffect(() => {
		axios
			.get('/mypet/List')
			.then((res) => {
				setPetNoList(res.data);
			})
			.catch(function (error) {
				console.log(error);
			})

	}, [])


	const swiperItems = petNoList.map((petNo, idx) => {
		return <div key={idx} className="swiper-slide"><MyPetProfile petNo={petNo} /></div>;
	});
	// 추가적인 슬라이드 아이템들을 배열로 생성



	return (
		<main>
			<MyPetSwiper items={swiperItems} />
			<MyPetTeb />
		</main>
	)
}

export default MyPet;
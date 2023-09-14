import React, { useEffect, useState } from 'react';
import MyPetProfile from './Mypetprofile';
import MyPetSwiper from './Mypetswiper';
import MyPetTeb from './Mypetteb';
import axios from 'axios';

function MyPet() {
	const [petNoList, setPetNoList] = useState<number[]>([]);
	const [isLogin , setIsLogin] = useState(false);
	const [petReload , setPetReload] = useState<boolean>(false);

	useEffect(() => {
		if(!(sessionStorage.getItem('loggedIn') === 'true')){
			alert('로그인좀 ;;;');
			window.location.replace('/login');
		}else{
			setIsLogin(true);
		}

	}, [isLogin])

	useEffect(() => {
		axios
			.get('/mypet/List')
			.then((res) => {
				setPetNoList(res.data);
			})
			.catch(function (error) {
				console.log(error);
			})

		setPetReload(false);

	}, [petReload])

	const handlePetReload = () => {
		setPetReload(true);
	}

	const swiperItems = petNoList.map((petNo, idx) => {
		return <div key={idx} className="swiper-slide"><MyPetProfile petNo={petNo} petReload={handlePetReload}/></div>;
	});
	// 추가적인 슬라이드 아이템들을 배열로 생성


	if(isLogin){
		return (

			<main>
				<MyPetSwiper items={swiperItems} petReload={handlePetReload}/>
				<MyPetTeb/>
			</main>

		)
	}else{
		return <></>
	}
}

export default MyPet;
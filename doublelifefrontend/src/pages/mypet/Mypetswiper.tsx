import React, {useEffect, useState} from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Styledswiper } from './mypet.style'
import MyPetProfile from "./Mypetprofile";

interface SwiperProps {
	items: JSX.Element[];
	petReload:()=>void;
}

function MyPetSwiper({ items , petReload}: SwiperProps) {

	const swiperParams = {
		spaceBetween: 50,
		slidesPerView: 1,
		navigation: true,
		modules: [Navigation]
	};


	return (
		<Styledswiper>
			<Swiper {...swiperParams} >
				{items.map((item, index) => (
					<SwiperSlide key={index}>{item}</SwiperSlide>
				))}
				<SwiperSlide key={items.length}>
					<div key={items.length} className="swiper-slide"><MyPetProfile petNo={0} petReload={petReload}/></div>
				</SwiperSlide>
			</Swiper>
		</Styledswiper>
	);
}

export default MyPetSwiper;

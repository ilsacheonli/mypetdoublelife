import React from 'react';
import { Navigation, History } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Styledswiper } from './mypet.style'

interface SwiperProps {
  items: JSX.Element[];
}

function MyPetSwiper({ items }: SwiperProps) {
	
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
			</Swiper>
		</Styledswiper>
	);
}

export default MyPetSwiper;

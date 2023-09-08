import React, {useState, useEffect } from 'react';
import { Mypetfeedmain, GridBox, FlexBox, ImgBox, Img, H5, NameBox, UserName, Like, Writea } from './mypet.style';
import { RiHeart3Fill, RiPencilLine } from 'react-icons/ri';
import MyPetFeedData from './MyPetFeedData'; // feedData.js 파일에서 데이터 가져오기
import axios from 'axios';

interface MyPetFeedItem {
	feedNo: number,
	image: string,
	feedTitle: string,
	petName: string,
	like: number
}

function MyPetFeed() {
	const [myPetFeedData, setMyPetFeedData] = useState<MyPetFeedItem[]>([]);
  const [imageData, setImageData] = useState<string>(''); // 이미지 데이터 상태 추가

	useEffect(() => {
		const apiUrl = '/myfeed';
		const imgUrl = '/image';

		axios.get(imgUrl)
			.then((res) => {
				setImageData(res.data)
			})
			.catch((error) => {
				console.log(error)
			})

		axios.get(apiUrl)
			.then((res) => {
				console.log('불러오기 성공', res.data)
				setMyPetFeedData(res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
			}, []);

	return (
		<>
		<Mypetfeedmain>
			<FlexBox>
				{myPetFeedData.map((item) => (
					<GridBox key={item.feedNo}>
						<ImgBox>
							<Img src={imageData} /*alt={item.postName}*/ />
							<H5>{item.feedTitle}</H5>
							<NameBox>
								<UserName>{item.petName}</UserName>
								<RiHeart3Fill />
								<Like>{item.like}</Like>
							</NameBox>
						</ImgBox>
					</GridBox>
				))}
			</FlexBox>
			<Writea href="/MyPetFeedWrite"><RiPencilLine /></Writea>
		</Mypetfeedmain>
		</>
	);
}

export default MyPetFeed;

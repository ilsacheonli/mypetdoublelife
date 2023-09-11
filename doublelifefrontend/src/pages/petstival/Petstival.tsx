import React, { useState, useEffect } from 'react';
import { Mypetfeedmain, GridBox, FlexBox, ImgBox, Img, H5, NameBox, UserName, Like, Writea } from './petstival.style';
import { RiHeart3Fill, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';
import { Link } from "react-router-dom";


interface MyPetFeedItem {
	memId: string,
	feedNo: number,
	imgNo: number,
	image: string,
	feedTitle: string,
	petName: string,
	like: number
}

function MyPetFeed() {
	const [myPetFeedList, setMyPetFeedList] = useState<MyPetFeedItem[]>([]);
	/*const [imageData, setImageData] = useState<string>(''); */

	useEffect(() => {
		const apiUrl = '/myfeed';

		/*axios.get(imgUrl)
		.then((res) => {
			setImageData(res.data)
		})
		.catch((error) => {
			console.log(error)
		})*/

		axios.get(apiUrl)
			.then((res) => {
				console.log('불러오기 성공', res.data)
				setMyPetFeedList(res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, []);


	return (
		<>
			<Mypetfeedmain>
				<FlexBox>
					{myPetFeedList.map((item) => (
						<GridBox key={item.feedNo} >
							<ImgBox>
								<Link to={`/mypetfeedview/${item.feedNo}`}>
									<Img src={'/image/'+item.imgNo} /*alt={item.postName}*/ />
									<H5>{item.feedTitle}</H5>
								</Link>
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

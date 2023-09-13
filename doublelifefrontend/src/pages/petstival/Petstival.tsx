import React, { useState, useEffect } from 'react';
import { Mypetfeedmain, GridBox, FlexBox, ImgBox, Img, H5, NameBox, UserName, Like, Writea } from './petstival.style';
import { RiHeart3Fill, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';
import { Link } from "react-router-dom";

interface MyPetFeedItem {
	user_id: string,
	user_name: string,
	likeNum: number,
	contentTitle: string,
	contentText: string 
}

function MyPetFeed() {
	const [myPetFeedList, setMyPetFeedList] = useState<MyPetFeedItem[]>([]);
	/*const [imageData, setImageData] = useState<string>(''); */

	useEffect(() => {
		const apiUrl = '/feedlist';
		const imgUrl = '/image/petstival';

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
						<GridBox /*key={item.feedNo}*/ >
							<ImgBox>
								<Link to={`/feedview/${item.user_id}`}>
									<Img /*src={'/image/'+item.imgNo} alt={item.postName}*/ />
									<H5>{item.contentTitle}</H5>
								</Link>
								<NameBox>
									<UserName>{item.user_name}</UserName>
									<RiHeart3Fill />
									<Like>{item.likeNum}</Like>
								</NameBox>
							</ImgBox>
						</GridBox>
					))}
				</FlexBox>
			</Mypetfeedmain>
		</>
	);
}

export default MyPetFeed;

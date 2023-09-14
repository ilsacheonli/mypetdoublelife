import React, { useState, useEffect } from 'react';
import { Mypetfeedmain, GridBox, FlexBox, ImgBox, Img, H5, NameBox, UserName, Like, Writea } from './petstival.style';
import { RiHeart3Fill, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';
import { Link } from "react-router-dom";

interface MyPetFeedItem {
	feed_no: number,
	user_id: string,
	user_name: string,
	likenum: number,
	contenttitle: string,
	contenttext: string,
	f_img_no: number
}

function Petstival() {
	const [myPetFeedList, setMyPetFeedList] = useState<MyPetFeedItem[]>([]);
	/*const [imageData, setImageData] = useState<string>(''); */

	useEffect(() => {
		const apiUrl = '/feedlist';
		/*const imgUrl = '/image/petstival';*/

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
						<GridBox key={item.feed_no} >
							<ImgBox>
								<Link to={`/feedview/${item.feed_no}`}>
									<Img src={`/image/petstival/${item.f_img_no}`} alt={item.contenttitle} />
									<H5>{item.contenttitle}</H5>
								</Link>
								<NameBox>
									<UserName>{item.user_name}</UserName>
									<RiHeart3Fill />
									<Like>{item.likenum}</Like>
								</NameBox>
							</ImgBox>
						</GridBox>
					))}
				</FlexBox>
			</Mypetfeedmain>
		</>
	);
}

export default Petstival;

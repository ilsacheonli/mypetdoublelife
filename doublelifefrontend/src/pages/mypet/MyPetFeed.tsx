import React from 'react';
import { Mypetfeedmain, GridBox, FlexBox, ImgBox, Img, H5, NameBox, UserName, Like, Writea } from './mypet.style';
import { RiHeart3Fill, RiPencilLine } from 'react-icons/ri';
import MyPetFeedData from './MyPetFeedData'; // feedData.js 파일에서 데이터 가져오기

function MyPetFeed() {

	return (
		<>
		<Mypetfeedmain>
			<FlexBox>
				{MyPetFeedData.map((item) => (
					<GridBox key={item.id}>
						<ImgBox>
							<Img src={item.imgSrc} /*alt={item.postName}*/ />
							<H5>{item.postName}</H5>
							<NameBox>
								<UserName>{item.userName}</UserName>
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

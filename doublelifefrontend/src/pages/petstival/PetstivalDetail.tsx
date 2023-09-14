import React, { useState, useEffect } from 'react'
import { Viewcontainer, Maincontainer, Commentcontainer, Petimg, Viewnamebox, Viewcontent } from './petstival.style';
import CommentBox from './CommentBox';
import CommentInput from './CommentInput'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { RiHeart3Fill } from 'react-icons/ri';

interface MyPetFeedItem {
	feed_no: number,
	user_id: string,
	user_name: string,
	likenum: number,
	contenttitle: string,
	contenttext: string,
	f_img_no: number
}

interface Comment {
	id: number;
	text: string;
}

function PetstivalDetail() {
	const [myPetFeedData, setMyPetFeedData] = useState<MyPetFeedItem>();
	const [comments, setComments] = useState<Comment[]>([]);
	const { feed_no } = useParams()

	useEffect(() => {
		axios.get(`/feedview/${feed_no}`)
			.then((res) => {
				setMyPetFeedData(res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, [feed_no]);

	const handleCommentSubmit = (text: string) => {
		console.log('Submitted Comment:', text);
		setComments((prevComments) => [
			...prevComments,
			{ id: Date.now(), text },
		]);
	};


	if (typeof myPetFeedData === 'undefined') return <></>;

	return (
		<Viewcontainer>
			<Maincontainer key={myPetFeedData.feed_no}>
				<h3>{myPetFeedData.contenttitle}</h3>
				<Petimg src={'/image/' + myPetFeedData.f_img_no} alt="대충 이미지" />
				<Viewnamebox>
					<span className='profileImg'></span>
					<span>{myPetFeedData.user_name}</span>
					<div>{myPetFeedData.likenum} <RiHeart3Fill /></div>
				</Viewnamebox>
				<Viewcontent>{myPetFeedData.contenttext}</Viewcontent>
			</Maincontainer>
			<Commentcontainer>
				<CommentInput onSubmit={handleCommentSubmit} />
				<CommentBox comments={comments} />
			</Commentcontainer>
		</Viewcontainer>
	)
}
export default PetstivalDetail
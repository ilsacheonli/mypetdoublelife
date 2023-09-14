import React, { useState, useEffect } from 'react'
import { Viewcontainer, Maincontainer, Commentcontainer, Petimg, Viewnamebox, Viewcontent } from './petstival.style';
import CommentBox from './CommentBox';
import CommentInput from './CommentInput'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { RiHeart3Fill } from 'react-icons/ri';

interface FeedItem {
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
	const [feedData, setFeedData] = useState<FeedItem>();
	const [comments, setComments] = useState<Comment[]>([]);
	const { feed_no } = useParams()

	useEffect(() => {
		console.log("feed_no:", feed_no);
		axios.get(`/feedview/${feed_no}`)
			.then((res) => {
				setFeedData(res.data)
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

	if (typeof feedData === 'undefined') return <></>;

	return (
		<Viewcontainer>
			<Maincontainer key={feedData.feed_no}>
				<h3>{feedData.contenttitle}</h3>
				<Petimg src={`/image/petstival/${feedData.f_img_no}`} alt="대충 이미지" />
				<Viewnamebox>
					<span className='profileImg'></span>
					<span>{feedData.user_name}</span>
					<div>{feedData.likenum} <RiHeart3Fill /></div>
				</Viewnamebox>
				<Viewcontent>{feedData.contenttext}</Viewcontent>
			</Maincontainer>
			<Commentcontainer>
				<CommentInput onSubmit={handleCommentSubmit} />
				<CommentBox comments={comments} />
			</Commentcontainer>
		</Viewcontainer>
	)
}
export default PetstivalDetail
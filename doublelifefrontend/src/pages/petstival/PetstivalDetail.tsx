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
	memId: string;
	reNo: number;
	petstivalNo: number;
	reContent: string;
	regDate: string;
}

function PetstivalDetail() {
	const [feedData, setFeedData] = useState<FeedItem>();
	const [comments, setComments] = useState<Comment[]>([]);
	const [ editComment, setEditComment] = useState<boolean>(false);
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

	useEffect(() => {
		axios.get(`/feedview/replyList/`+feed_no)
			.then((res) => {
				setEditComment(false);
				setComments(res.data);
				console.log('불러오기 성공', res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, [feed_no, editComment]);

	const handleEditComment = () => {
		console.log('edit Comment');
		setEditComment(true);
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
				<CommentInput feed_no={feedData.feed_no} editComment={handleEditComment} />
				<CommentBox comments={comments} editComment={handleEditComment} />
			</Commentcontainer>
		</Viewcontainer>
	)
}
export default PetstivalDetail
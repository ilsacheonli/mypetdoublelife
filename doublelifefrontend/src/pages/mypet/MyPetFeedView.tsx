import React, { useState, useEffect } from 'react'
import { Viewcontainer, Maincontainer, Commentcontainer, Petimg, Viewnamebox, Viewcontent } from './mypet.style';
import MyPetCommentBox from './MyPetCommentBox';
import MyPetCommentInput from './MyPetCommentInput'
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import { RiHeart3Fill } from 'react-icons/ri';

interface MyPetFeedItem {
	feedNo: number,
	imgNo: number,
	image: string,
	feedTitle: string,
	feedContent: string,
	petName: string,
	like: number
}

interface Comment {
	id: number;
	text: string;
}

function MyPetFeedView() {
	const [myPetFeedData, setMyPetFeedData] = useState<MyPetFeedItem>();
	const [comments, setComments] = useState<Comment[]>([]);
	const { feedNo } = useParams()
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`/myfeed/${feedNo}`)
			.then((res) => {
				setMyPetFeedData(res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, [feedNo]);

	const handleCommentSubmit = (text: string) => {
		console.log('Submitted Comment:', text);
		setComments((prevComments) => [
			...prevComments,
			{ id: Date.now(), text },
		]);
	};

	const handleDeleteClick = () => {
		axios.post(`/myfeed/delete/${feedNo}`)
			.then((res) => {
				navigate('/mypet')
				alert('삭제완료')
			})
			.catch((error) => {
				alert('삭제실패')
			});
	};

	if (typeof myPetFeedData === 'undefined') return <></>;

	return (
		<Viewcontainer>
			<Maincontainer key={myPetFeedData.feedNo}>
				<div className='buttonDiv'>
					<h3>{myPetFeedData.feedTitle}</h3>
						<Link to={`/myfeed/update/${feedNo}`}>
							<button className='update'><RiPencilLine /></button>
						</Link>
					<button className='delete' onClick={handleDeleteClick}><RiDeleteBinLine /></button>
				</div>
				<Petimg src={'/image/' + myPetFeedData.imgNo} alt="대충 이미지" />
				<Viewnamebox>
					<span className='profileImg'></span>
					<span>{myPetFeedData.petName}</span>
					<div>{myPetFeedData.like} <RiHeart3Fill /></div>
				</Viewnamebox>
				<Viewcontent>{myPetFeedData.feedContent}</Viewcontent>
			</Maincontainer>
			<Commentcontainer>
				<MyPetCommentInput onSubmit={handleCommentSubmit} />
				<MyPetCommentBox comments={comments} />
			</Commentcontainer>
		</Viewcontainer>
	)
}
export default MyPetFeedView
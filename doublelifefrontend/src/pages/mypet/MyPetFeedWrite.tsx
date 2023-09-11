import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Writecontainer, Writeform, Titlediv, Imgdiv, Contentdiv, Buttonbox } from './mypet.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Post {
	feedTitle: string;
	feedContent: string;
	petName: string;
	image: File | null;
	imagePreviewUrl: string | null;
}

function MyPetFeedWrite() {
	const [post, setPost] = useState<Post>({
		feedTitle: '',
		feedContent: '',
		petName: '',
		image: null,
		imagePreviewUrl: '',
	});
	const navigate = useNavigate();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setPost((prevPost) => ({
			...prevPost,
			[name]: value,
		}));
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			// 이미지 미리보기 URL 생성
			const reader = new FileReader();
			reader.onloadend = () => {
				setPost((prevPost) => ({
					...prevPost,
					image: file,
					imagePreviewUrl: reader.result as string, // Blob URL을 할당합니다.
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDeleteImage = () => {
		setPost((prevPost) => ({
			...prevPost,
			image: null,
			imagePreviewUrl: '',
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append('feedTitle', post.feedTitle);
			formData.append('feedContent', post.feedContent);
			formData.append('petName', post.petName);
			if (post.image) {
				formData.append('image', post.image);
			}

			const response = await axios.post('/myfeed/insert', formData);
			console.log('게시글 등록 완료', response.data);
			navigate('/mypet')
		} catch (error) {
			console.error('게시글 등록 실패', error);
		}
	};


	return (
		<Writecontainer>
			<Writeform onSubmit={handleSubmit}>

				<Titlediv>
					<label htmlFor="feedTitle" />
					<input
						type="text"
						id="feedTitle"
						name="feedTitle"
						value={post.feedTitle}
						onChange={handleInputChange}
						required
						placeholder='제목을 입력하세요.'
					/>
				</Titlediv>

				<Titlediv>
					<label htmlFor="petName" />
					<input
						type="text"
						id="petName"
						name="petName"
						value={post.petName}
						onChange={handleInputChange}
						required
						placeholder='닉네임을 입력하세요.'
					/>
				</Titlediv>

				<Contentdiv>
					<label htmlFor="feedContent"></label>
					<textarea
						id="feedContent"
						name="feedContent"
						value={post.feedContent}
						onChange={handleInputChange}
						required
						placeholder='내용을 입력하세요.'
					/>
				</Contentdiv>

				<Imgdiv>
					<label htmlFor="image">이미지 업로드</label>
					{post.imagePreviewUrl && (
						<img
							src={post.imagePreviewUrl}
							alt="선택된 이미지"
							style={{ maxWidth: '100%' }}
							onClick={handleDeleteImage} />
					)}
					<input
						type="file"
						id="image"
						name="image"
						accept="image/*"
						onChange={handleImageChange} />
				</Imgdiv>

				<Buttonbox>
					<button type="submit">게시</button>
					<a href="/MyPet">취소</a>
				</Buttonbox>
			</Writeform>
		</Writecontainer>
	);
};

export default MyPetFeedWrite;

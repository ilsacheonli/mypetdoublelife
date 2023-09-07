import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Writecontainer, Writeform, Titlediv, Imgdiv, Contentdiv, Buttonbox } from './mypet.style';

interface Post {
	title: string;
	content: string;
	petName: string;
	image: File | null;
	imagePreviewUrl: string | null;
}

function MyPetFeedWrite() {
	const [post, setPost] = useState<Post>({
		title: '',
		content: '',
		petName: '',
		image: null,
		imagePreviewUrl: '',
	});

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

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// 여기에서 포스트를 서버로 보내거나 상태를 처리할 수 있습니다.
		console.log('작성된 포스트:', post);
	};

	return (
		<Writecontainer>
			<Writeform onSubmit={handleSubmit}>

				<Titlediv>
					<label htmlFor="title" />
					<input
						type="text"
						id="title"
						name="title"
						value={post.title}
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
					<label htmlFor="content"></label>
					<textarea
						id="content"
						name="content"
						value={post.content}
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

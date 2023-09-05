import React, { useState, useRef, ChangeEvent } from 'react';
import { Profileimg } from './mypet.style'

function MyPetProfileImg() {
	const [Image, setImage] = useState<string>("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const fileInput = useRef<HTMLInputElement | any>(null);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			// 업로드 취소 시
			if (!file) {
				setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
				return;
			}

			// 화면에 프로필 사진 표시
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === FileReader.DONE) {
					setImage(reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<Profileimg 
        src={Image} 
        onClick={()=>{fileInput.current.click()}}>
			</Profileimg>
			<input
				type="file"
				style={{ display: 'none' }}
				accept="image/jpg,image/png,image/jpeg"
				name="profile_img"
				onChange={onChange}
				ref={fileInput}
			/>
		</>
	);
}

export default MyPetProfileImg;

import React, { useState, useRef, ChangeEvent } from 'react';
import { Profileimg } from './mypet.style'
import axios from 'axios';

function MyPetProfileImg() {
  const [image, setImage] = useState<string>("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const fileInput = useRef<HTMLInputElement | null>(null);

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
          const imageUrl = reader.result as string;
          setImage(imageUrl);
          // handleUpload 함수를 호출하여 파일 업로드 수행
          handleUpload(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (file: File) => {
    const frm = new FormData();
    frm.append('profileImg', file);

    const imgNo = 1;
    frm.append('imgNo', imgNo.toString());

    axios.post('/image/profile', frm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      // 서버에서 응답을 받았을 때 이미지 URL을 업데이트할 필요 없음
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <form>
      <Profileimg
        src={image}
        onClick={() => { fileInput.current && fileInput.current.click(); }}
      >
      </Profileimg>
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/jpg,image/png,image/jpeg"
        name="profileImg"
        onChange={onChange}
        ref={fileInput}
      />
    </form>
  );
}

export default MyPetProfileImg;

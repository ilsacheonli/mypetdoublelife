import React, { useState } from 'react';
import { Intro, ProfileButton, Formbutton, Button, Default } from './mypet.style';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

function MyPetIntro() {
  const initialPetData = {
    name: '',
    gender: '',
    birthday: '',
    introduction: ''
  };

  const [petData, setPetData] = useState(initialPetData);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value
    });
  };

	const handleEditButtonClick = () => {
    setEditing(true);
  };

  const handleSaveButtonClick = () => {
    setEditing(false);
    // 서버에 프로필 수정 요청을 보내거나 다른 처리를 수행할 수 있습니다.
  };

  const handleDelete = () => {
    setPetData(initialPetData); // 프로필 데이터 초기화
    alert('프로필이 삭제되었습니다.');
  };

  return (
    <Intro>
      {editing ? (
        <form>
          <p>
            이름 : {''}
            <input type="text" name="name" value={petData.name} onChange={handleInputChange}/>
          </p>
          <p>
            성별 : {''}
            <input type="text" name="gender" value={petData.gender} onChange={handleInputChange}/>
          </p>
          <p>
            생일 : {''}
            <input type="text" name="birthday" value={petData.birthday} onChange={handleInputChange}/>
          </p>
          <p>
            자기소개 : {''}
						<textarea name="introduction" value={petData.introduction} onChange={handleInputChange}/>
          </p>
					<Formbutton>
          <ProfileButton>
            <button onClick={handleSaveButtonClick}><RiPencilLine /></button>
            <button type="button" onClick={() => setEditing(false)}><RiDeleteBinLine /></button>
          </ProfileButton>
					</Formbutton>
        </form>
      ) : (
        <Default>
          <p>이름 : {petData.name}</p>
          <p>성별 : {petData.gender}</p>
          <p>생일 : {petData.birthday}</p>
          <p>자기소개 : {petData.introduction}</p>
					<Button>
          <ProfileButton>
            <button onClick={handleEditButtonClick}><RiPencilLine /></button>
            <button onClick={handleDelete}><RiDeleteBinLine /></button>
          </ProfileButton>
					</Button>
        </Default>
      )}
    </Intro>
  );
}

export default MyPetIntro;

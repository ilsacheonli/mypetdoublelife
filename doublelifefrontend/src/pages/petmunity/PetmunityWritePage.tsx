import React, { ChangeEvent, useEffect, useState } from 'react';
import { Buttonbox, Contentdiv, Imgdiv, Titlediv, Writecontainer, Writeform } from './petmunitywrite.style';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface PostImage {
    image: File | null;
    imagePreviewUrl: string | null;
}

const PetmunityWritePage = () => {  
    // hook
    const navigate = useNavigate();
    const params = useParams().id;

    // state
    let [title, setTitle] = useState<string>('');
    let [content, setContent] = useState<string>('');
    let [writer, setWriter] = useState<string>('');
    const [postImg, setPostImg] = useState<PostImage>({
        image: null,
        imagePreviewUrl: ''
    });

    const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (title.length === 0) {
            alert('제목을 입력해 주세요.');
        } else if (content.length === 0) {
            alert('내용을 입력해 주세요.');
        } else {
            if (window.confirm('게시글을 등록하시겠습니까?')) {
                const files = new FormData();
                console.log(postImg.image);

                if (postImg.image) {
                    files.append('image', postImg.image);
                    // axios.post(`http://localhost:8080/petmunity/writepage`, {
                    //     headers: {'Content-Type': 'multipart/form-data'},
                    //     formData
                    // })
                    // .catch(function(error) {
                    //     console.log(error);
                    // });
                }
                console.log("files: " + files.has('image'));
                
                axios.post('http://localhost:8080/petmunity/writepage', {
                    headers: {'Content-Type': 'multipart/form-data'},
                    category: 'writepage',
                    // bno: bno,
                    title: title,
                    writer: sessionStorage.getItem('id'),
                    content: content,
                    // files: files
                })
                .then(function(response) {
                    setPostImg(response.data);
                    alert('게시글이 등록되었습니다.');
                    navigate('/petmunity/qna');
                })

                .catch(function(error) {
                    console.log(error);
                });

                

            } else {
                return false;
            }
        }
    }
    
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            // 이미지 미리보기 URL 생성
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostImg((prevPost) => ({
                    ...prevPost,
                    image: file,
                    imagePreviewUrl: reader.result as string, // Blobl URL 할당
                }));
            }
            reader.readAsDataURL(file);
        }
    }

    const handleDeleteImage = () => {
        setPostImg((prevPost) => ({
            ...prevPost,
            image: null,
            imagePreviewUrl: '',
        }));
    }

    const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (window.confirm('게시글 작성을 취소하시겠습니까?')) {
            navigate('/petmunity/qna');
        } else {
            return false;
        }
    }

    return (
        <>
            <Writecontainer>
                <Writeform encType='multipart/form-data'>
                    <Titlediv>
                        <input placeholder="제목을 입력하세요." name='title'
                                onChange={(e) => setTitle(e.target.value)} />
                    </Titlediv>

                    <Titlediv>
                        <div style={{textAlign:'initial'}}>작성자: {sessionStorage.getItem('id')}</div>
                    </Titlediv>

                    <Contentdiv>
                        <textarea placeholder="내용을 입력하세요." name='content'
                                onChange={(e) => {setContent(e.target.value)}} />
                    </Contentdiv>

                    {/* <Imgdiv>
                        <label htmlFor='image'>이미지 업로드</label>
                        {postImg.imagePreviewUrl && (
                            <img
                                src={postImg.imagePreviewUrl}
                                alt="선택된 이미지"
                                style={{ maxWidth: '100%' }}
                                onClick={handleDeleteImage} />
                        )}
                        <input 
                            type='file'
                            id='image'
                            name='files'
                            accept='image/*'
                            onChange={handleImage}
                        />
                    </Imgdiv> */}

                    <Buttonbox>
                        <button onClick={formSubmit}>게시</button>
                        <button onClick={formCancel}>취소</button>
                    </Buttonbox>
                </Writeform>
            </Writecontainer>
        </>
    );
}

export default PetmunityWritePage;
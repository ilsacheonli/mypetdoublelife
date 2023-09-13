import React, { useState } from 'react';
import { Buttonbox, Contentdiv, Titlediv, Writecontainer, Writeform } from './petmunitywrite.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetmunityWritePageTrade = () => {  
    // hook
    const navigate = useNavigate();

    // state
    let [title, setTitle] = useState<string>('');
    let [content, setContent] = useState<string>('');
    let [writer, setWriter] = useState<string>('');
    let [bno, setBno] = useState<number>(109);

    const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (title.length === 0) {
            alert('제목을 입력해 주세요.');
        } else if (content.length === 0) {
            alert('내용을 입력해 주세요.');
        } else {
            if (window.confirm('게시글을 등록하시겠습니까?')) {
                axios.post('http://localhost:8080/petmunity/writePage', {
                    headers: {'Content-Type': 'multipart/form-data'},
                    category: 'trade',
                    // bno: bno,
                    title: title,
                    writer: writer,
                    content: content,
                })
                .then(function(response) {
                    alert('게시글이 등록되었습니다.');
                    navigate('/petmunity/trade');
                })

                .catch(function(error) {
                    console.log(error);
                });
            } else {
                return false;
            }
        }
    }
    

    const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (window.confirm('게시글 작성을 취소하시겠습니까?')) {
            navigate('/petmunity/trade');
        } else {
            return false;
        }
    }

    return (
        <>
            <Writecontainer>
                <Writeform>
                    <Titlediv>
                        <input placeholder="제목을 입력하세요."
                                onChange={(e) => setTitle(e.target.value)} />
                    </Titlediv>

                    <Titlediv>
                        <input placeholder="닉네임을 입력하세요."
                                onChange={(e) => {setWriter(e.target.value)
                                console.log("writer: " + writer)}} />
                    </Titlediv>

                    <Contentdiv>
                        <textarea placeholder="내용을 입력하세요."
                                onChange={(e) => {setContent(e.target.value)
                                console.log("content: " + content)}} />
                    </Contentdiv>

                    <Buttonbox>
                        <button onClick={formSubmit}>게시</button>
                        <button onClick={formCancel}>취소</button>
                    </Buttonbox>
                </Writeform>
            </Writecontainer>
        </>
    );
}

export default PetmunityWritePageTrade;
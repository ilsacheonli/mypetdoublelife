import React, { useState } from 'react';
import { FlexableTextArea, WriteBtn, WritingContent, WritingEditor, WritingHeader, WritingWrap } from './petmunitywrite.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import express from 'express';

const PetmunityWritePage = () => {
    // const app = express();
    // const cors = require('cors');
    // app.use(cors({credentials: true, origin: "http://localhost:3000"}));
    
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
                    category: 'qna',
                    // bno: bno,
                    title: title,
                    writer: writer,
                    content: content,
                })
                .then(function(response) {
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
            <WritingWrap>
                <WritingHeader>
                    <h2 className='title'>글쓰기</h2>
                    <div className='tool_area'>
                        {/* <a href="/" role="button" className='write_btn' style={{color: "#000", textDecoration: "none"}}>
                            <span>등록</span>
                        </a>
                        <a href="/" role="button" className='write_btn' style={{color: "#000", textDecoration: "none"}}>
                            <span>취소</span>
                        </a> */}
                        <WriteBtn children="Confirm" onClick={formSubmit} />
                        <WriteBtn children="Cancel" onClick={formCancel} />
                    </div>
                </WritingHeader>
                <WritingContent>
                    <WritingEditor>
                        <form encType='multipart/form-data'>
                        <div className='ArticleWritingTitle' style={{textAlign: "initial"}}>
                            <FlexableTextArea>
                                <textarea placeholder="제목을 입력해 주세요." className='textarea_input' style={{height: "40px"}}
                                onChange={(e) => setTitle(e.target.value)}
                                ></textarea>
                            </FlexableTextArea>
                        </div>
                        <div className='WritingContent'>
                            <FlexableTextArea>
                                <textarea placeholder="내용을 입력해 주세요." className='textarea_input'
                                onChange={(e) => {setContent(e.target.value)
                                console.log("content: " + content)}}></textarea>
                                <textarea placeholder="작성자" className='textarea_input'
                                onChange={(e) => {setWriter(e.target.value)
                                console.log("writer: " + writer)}}></textarea>
                                
                            </FlexableTextArea>

                        </div>
                        </form>
                    </WritingEditor>
                </WritingContent>
            </WritingWrap>
        </>
    );
}

export default PetmunityWritePage;
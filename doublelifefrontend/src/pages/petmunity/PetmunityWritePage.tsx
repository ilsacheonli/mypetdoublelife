import React from 'react';
import { FlexableTextArea, WritingContent, WritingEditor, WritingHeader, WritingWrap } from './petmunitywrite.style';

function PetmunityWritePage() {
    return (
        <>
            <WritingWrap>
                <WritingHeader>
                    <h2 className='title'>글쓰기</h2>
                    <div className='tool_area'>
                        <a href="/" role="button" className='write_btn' style={{color: "#000", textDecoration: "none"}}>
                            <span>등록</span>
                        </a>
                    </div>
                </WritingHeader>
                <WritingContent>
                    <WritingEditor>
                        <div className='ArticleWritingTitle' style={{textAlign: "initial"}}>
                            <FlexableTextArea>
                                <textarea placeholder="제목을 입력해 주세요." className='textarea_input' style={{height: "40px"}}></textarea>
                            </FlexableTextArea>
                        </div>
                    </WritingEditor>
                </WritingContent>
            </WritingWrap>
        </>
    );
}

export default PetmunityWritePage;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { writer } from "repl";
import { WritingWrap, WritingHeader, WriteBtn, WritingContent, WritingEditor, FlexableTextArea } from "./petmunitywrite.style";
import { BoardListInterface } from "./BoardListInterface";

const PetmunityModify = () => {
    // hook
    const params = useParams().id;
    const navigate = useNavigate();
    const [detailBoardData, setDetailBoardData] = useState<BoardListInterface>();


    // state
    let [modifyBoardData, setModifyBoardData] = useState<any>([]);
    let [title, setTitle] = useState<string>(modifyBoardData.title);
    let [content, setContent] = useState<string>(modifyBoardData.content);

    const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (title.length === 0) {
            alert('제목을 입력해 주세요.');
        } else if (content.length === 0) {
            alert('내용을 입력해 주세요.');
        } else {
            if (window.confirm('게시글을 수정하시겠습니까?')) {
                console.log("axios title: " + title);
                axios.post(`http://localhost:8080/board/modify/${params}`, {
                    headers: {'Content-Type': 'multipart/form-data'},
                    id: detailBoardData?.id,
                    category: 'qna',
                    title: title,
                    content: content,
                    writer: detailBoardData?.writer,
                    bno: detailBoardData?.bno,
                    updatedDate: new Date(),
                    regDate: detailBoardData?.regDate
                })
                .then(function(response) {
                    alert('게시글이 수정되었습니다.');
                    navigate(`/board/view/${params}`);
                })
                .catch(function(error) {
                    console.log(error);
                })
            } else {
                return false;
            }
        }
    }

    const formDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e. preventDefault();
    
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
          axios.get(`http://localhost:8080/board/delete/${params}`, {
          })
          .then(function(response) {
            alert('게시글이 삭제되었습니다.');
            navigate('/petmunity/qna');
          })
          .catch(function(error) {
            console.log(error);
          })
        } else {
          return false;
        }
      }

      const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (window.confirm('게시글 수정을 취소하시겠습니까?')) {
            navigate('/petmunity/qna');
        } else {
            return false;
        }
      }

      useEffect(() => {
        axios.get(`/board/modify/${params}`)
          .then((response) => {
            setDetailBoardData(response.data)
          })
    
          .catch(function(error) {
            console.log( error)
          })
      }, [])

      useEffect(() => {
        axios.get(`/board/view/${params}`)
        .then((response) => {
            setModifyBoardData(response.data)
        })
        .catch(function(error) {
            console.log(error);
        })
      }, [])

      useEffect(() => {
        setTitle(modifyBoardData.title);
        console.log("title: " + title);
      }, [modifyBoardData.title])

      useEffect(() => {
        setContent(modifyBoardData.content);
      }, [modifyBoardData.content])

      if (typeof detailBoardData === 'undefined') return <></>;

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
                                <textarea value={title || ""} placeholder="제목을 입력해 주세요." className='textarea_input' style={{height: "40px"}}
                                onChange={(e) => {setTitle(e.target.value)
                                }}
                                ></textarea>
                            </FlexableTextArea>
                        </div>
                        <div className='WritingContent'>
                            <FlexableTextArea>
                                <textarea value={content || ""} placeholder="내용을 입력해 주세요." className='textarea_input'
                                onChange={(e) => {setContent(e.target.value)}}></textarea>
                                <div className="nick_box">작성자: {detailBoardData.writer}</div>
                                
                            </FlexableTextArea>

                        </div>
                        </form>
                    </WritingEditor>
                </WritingContent>
            </WritingWrap>
        </>
      )
}

export default PetmunityModify;
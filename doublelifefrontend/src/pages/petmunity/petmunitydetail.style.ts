import styled from "styled-components";

export const ArticleContentBox = styled.div`
  padding: 29px 29px 29px 29px;
  text-align: left;
  border: 1px solid;
  border-radius: 6px;
  & > .article_header {
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
  }
`;

export const ArticleTitle = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  & > .title_area {
    margin-top: 7px;
  }
  & > .title_text {
    font-weight: 400;
    font-size: 26px;
    word-wrap: break-word;
    word-break: break-word;
    & h3 {
      font-size: 26px;
    }
  }
`;

export const WriterInfo = styled.div`
  text-align: right;
  & > .profile_info {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    & > .nick_box {
      display: inline-block;
      position: relative;
      vertical-align: top;
    }
  }

  & > .article_info {
    font-size: 12px;
    line-height: 13px;
    & > .date {
      margin-right: 8px;
    }
  }
`;

export const ArticleBottomBtns = styled.div`
    padding-top: 14px;
  & > .right_area {
    float: right;
  }
`;

export const ListButton = styled.button`
  width: 74px;
  padding: 9px 0;
  display: inline-block;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
  text-align: center;
  vertical-align: top;
  background-color: white;
`;

export const CommentBox = styled.div`
  margin-top: -17px;
  border-top: 1px solid;

  & > .comment_title {
    float: left;
    margin-top: 3px;
    margin-right: 12px;
    font-size: 17px;
  }

  & > .comment_list {
    position: relative;
    padding: 12px 23px 10px 0;

    & > .comment_text_box {
      position: relative;
      font-size: 13px;
      word-break: break-all;
      word-wrap: break-word;

      & > .comment_text_view {
        overflow: hidden;
      }

      & > .text_comment {
        line-height: 17px;
        word-break: break-all;
        word-wrap: break-word;
        vertical-align: top;
      }
    }

    & > .comment_info_box {
      margin-top: 7px;
      font-size: 12px;

      & > .comment_info_date {
        margin-right: 8px;
      }
    }

    & > .comment_area {
      position: relative;
      padding: 12px 23px 10px 0;
    }
  }

  & > .comment_box {
    padding-left: 46px;

    & > .comment_nick_box {
      margin-bottom: 4px;

      & > .comment_nick_info {
        display: inline-block;
        position: relative;
        font-size: 13px;
        vertical-align: top;
      }

      & > .comment_nickname {
        font-weight: 700;
      }
    }
  }
`


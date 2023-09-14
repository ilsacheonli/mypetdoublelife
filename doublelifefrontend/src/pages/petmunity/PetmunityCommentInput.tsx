import styled from "styled-components";

interface Item {
  text: string;
}

interface ItemListProps {
  items: Item[];
}

function PetmunityCommentInput({ items }: ItemListProps) {
  const today = new Date(); // 현재 날짜

  // 댓글 날짜 형식에 맞춰 출력
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;

  return (
    <>
      {items.map((item, index) => (
        <Li key={index}>
          <CommentBox>
            <div
              className="comment_nick_box"
              style={{ marginBottom: "1px", marginTop: "20px" }}
            >
              <span
                className="comment_nick_info"
                style={{ fontWeight: "bold" }}
              >
                {sessionStorage.getItem("id")}{" "}
              </span>
              <span className="comment_info_date" style={{ color: "#7f7f7f" }}>
                {formattedDate}
              </span>
            </div>
            <div className="comment_text_box" style={{ marginTop: "1px" }}>
              <div className="comment_text_view">
                <span className="text_comment">{item.text}</span>
              </div>
            </div>
          </CommentBox>
        </Li>
      ))}
    </>
  );
}

export default PetmunityCommentInput;

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  &:hover {
    button {
      display: block;
    }
  }
  button {
    background-color: #fff;
    border: none;
    display: none;
  }
  svg {
    width: 27px;
    height: 27px;
    color: #063160;
  }
`;

const CommentBox = styled.div`
  margin-top: -17px;

  & h4 {
    padding-top: 10px;
  }

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

      & span {
      }

      & > .comment_text_view {
        overflow: hidden;
        & > .text_comment {
          line-height: 17px;
          word-break: break-all;
          word-wrap: break-word;
          vertical-align: top;
        }
      }
    }

    & > .comment_info_box {
      margin-top: 7px;
      font-size: 12px;

      & > .comment_info_date {
        text-align: right;
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
`;
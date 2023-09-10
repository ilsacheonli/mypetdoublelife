import styled from "styled-components";

export const ListDivide = styled.div`
  font-size: 24px;
  color: #333333;
  line-height: 35px;
  padding-bottom: 25px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    background: #3b4b9b;
    border-radius: 50px;
    width: 100%;
  }
  & ul {
    list-style: none;
    & li {
      border-bottom: 1px solid #dedede;
      padding: 15px 10px 0 10px;
      position: relative;
      & a {
        display: block;
      }
      & img {
        position: absolute;
        left: 0;
        top: 60px;
        border-radius: 15px;
        overflow: hidden;
        width: 440px;
        height: 250px;
      }
      & > .txt {
        position: relative;
        padding-top: 20px;
        min-height: 230px;
        text-align: left;
        & > .title {
          font-size: 24px;
          color: #333333;
          line-height: 35px;
          padding-bottom: 25px;
          margin-bottom: 20px;
          font-weight: 600;
          letter-spacing: -1px;
          position: relative;
          & > .mark {
            display: inline-block;
            vertical-align: top;
            width: 36px;
            height: 35px;
            margin-right: 10px;
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            background: #3b4b9b;
            border-radius: 50px;
            width: 70px;
          }
        }
        & > .info {
          & ul {
            padding-left: 0;
            & li {
              margin-bottom: 10px;
              border-bottom: 1px solid #ffffff;
              font-size: 16px;
              color: #333333;
              line-height: 20px;
              position: relative;
              padding: 5px 0 5px 10px;
              line-height: 150%;
              letter-spacing: -1px;
              & img {
                position: absolute;
                left: 0;
                top: 4px;
              }
              & > .find_store {
                position: absolute;
                left: 0;
                top: 4px;
              }
            }
          }
        }
      }
    }
  }
`;

import styled from "styled-components";
import searchIcon from "../../img/search.svg";

export const Contents = styled.div`
  padding: 1% 25px 10px 25px;
  margin: 3%;
  margin-top: 0;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabMenu = styled.ul`
  background-color: white;
  color: #3f3f3f;
  font-weight: bold;
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 10px;
  text-align: center;

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    /* justify-content: space-between;
    width: 380px;
    heigth: 30px; */
    width: calc(100% / 2);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 3px solid #d6d6d6;
    color: #d6d6d6;
    &:hover {
      color: #3b4b9b;
      border-bottom: 3px solid #3b4b9b;
    }
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    text-emphasis-color: #3b4b9b !important;
    color: #3b4b9b !important;
    border-bottom: 3px solid #3b4b9b;
    text-decoration: none;
  }

  & div.desc {
    text-align: center;
  }
`;

export const Desc = styled.div`
  text-align: center;
`;

export const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-color: white;
  background-size: 60%;
  background-position: center;
  border-radius: 30px;
`;

export const SearchBar = styled.div`
  width: auto;
  margin: 0 auto 40px auto;
  border-bottom: 2px solid #3b4b9b;
  max-width: 600px;
`;

export const PetMapContainerBox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid;
`;

export const MapList = styled.div`
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

export const PetMapPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 50px auto;
  margin-bottom: 50px;

  & li {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s;

    &:hover,
    &:active,
    &.active {
      background-color: #3b4b9b;
      color: white;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-last-child(1),
    &:nth-last-child(2) {
      a {
        align-items: baseline;
        font-size: 20px;
        text-decoration: none;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 12px;
      text-decoration: none;
      color: #3b4b9b;
    }
  }
`
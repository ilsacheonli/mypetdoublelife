import styled from "styled-components";
import searchIcon from '../../img/search.svg'


export const Contents = styled.div`
  padding: 1% 25px 10px 25px;
  margin: 3%;
  margin-top: 0;
`

export const TabMenu = styled.ul`
  background-color: white;
  color: #3f3f3f;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 10px;

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
    color: #3b4b9b;
    border-bottom: 3px solid #3b4b9b;
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
`

export const SearchBar = styled.div`
  width: auto;
  margin: 0 auto 60px auto;
  border-bottom: 2px solid #3b4b9b;
  max-width: 600px;
`

export const PetMapContainerBox = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid;

`
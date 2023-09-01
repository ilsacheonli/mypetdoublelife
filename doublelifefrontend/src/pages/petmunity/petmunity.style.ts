import styled from "styled-components";
import chevronDown from '../../img/caret-down-fill.svg';
import searchIcon from '../../img/search.svg'

export const Contents = styled.div`
  padding: 1% 25px 10px 25px;
  margin: 3%;
  margin-top: 0;
`

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`

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
    width: calc(100% / 3);
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

export const SearchBar = styled.div`
  width: auto;
  margin: 0 auto 60px auto;
  border-bottom: 2px solid #3b4b9b;
  max-width: 600px;
`

export const ChevronDown = styled.img`
  background-image: url(${chevronDown});
`

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

export const Board = styled.div`
  display: inline-block;
  margin-top: 0;
`

export const BoardList = styled.div`
  display: inline-block;
  & h4 {
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: left;
  }

  table {
    thead {
      th {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 70;
        border-top: 2px solid #3f3f3f;
      }
    }

    tbody {
      border-top: 1.5px solid #3f3f3f;

      td {
        padding: 25px 0;
        text-align: center;
        vertical-align: middle;

        &.title {
          text-align: left;

          a {
            padding-bottom: 2px;

            &:hover {
              border-bottom: 1px solid #3b4b9b;
            }
          }
        }
      }
    }
  }
`
export const Wrapper = styled.div`
  position: relative;
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: #ccc;
  color: inherit;
  display: flex;
  font-size: inherit;
  max-width: 160px;
  padding: 1em;

  &:after {
    content: "";
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: #ececec;
  color: black;
  display: ${props => (props.active ? "block" : "none")};
  margin: 0;
  min-width: 180px;
  padding: 0;
  position: absolute;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      display: block;
      padding: 0.5em;
      &:hover {
        background-color: lightblue;
      }
    }
  }
`;

export const FloatRight = styled.div`
  float: right;
`;

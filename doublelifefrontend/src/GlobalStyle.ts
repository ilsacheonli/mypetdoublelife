import styled from "styled-components";
import logo from "./img/logo_final.svg";

export const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  justify-content: center;
  display: flex;
	padding-left: 5%;
	padding-right: 5%;
	ul {
		padding: 0;
		margin: 0;
	}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
	align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
	a {
		width: 20%;
	}
`;

export const Logo = styled.div`
  width: 140px;
  height: 90px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 140px 90px;
  opacity: 0.8;
  cursor: pointer;
	border: none;
	filter: invert(14%) sepia(20%) saturate(7000%) hue-rotate(197deg) brightness(94%) contrast(103%);
	margin-left: 20px;
`;

export const Links = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 400;
  font-size: 14px;


  & ul {
    list-style: none;
    & li {
      padding: 12px 12px;
      opacity: 0.8;
      list-style: none;
      & a {
        font-family: "Noto Sans KR", "sans-serif";
        color: #3b4b9b;
        opacity: 0.8;
        font-weight: 600;
        text-decoration: none;
        &:hover {
          opacity: 1;
          transition: opacity 0.3s;
        }
        &:active,
        &.active {
          color: #3b4b9b !important;
          font-weight: 600;
        }
      }
    }
  }
`;

export const LinkSign = styled.ul`
  width: 20%;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;

  li {
    padding: 12px 12px;
    opacity: 0.8;
    list-style: none;
    margin-top: 5px;
  }

  .link {
    opacity: 0.8;
    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
    text-decoration: none;
  }

  .vl {
    border-left: 1px solid;
    color: #656565;
    opacity: 0.6;
    margin: 15px 15px;
  }

  a {
    font-family: "Noto Sans KR", "sans-serif";
    color: #656565;
  }
`;

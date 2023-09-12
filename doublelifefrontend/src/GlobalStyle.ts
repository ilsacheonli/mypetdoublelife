import styled from "styled-components";
import logo from "./img/logo_final.png";

export const NavContainer = styled.nav`
  width: 100%;
  height: 50px;
  margin: 15px;
  margin-bottom: 0;
  justify-content: center;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 44px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 90px 40px;
  opacity: 0.8;
  cursor: pointer;
`;

export const Links = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;

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
  width: 30%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;

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

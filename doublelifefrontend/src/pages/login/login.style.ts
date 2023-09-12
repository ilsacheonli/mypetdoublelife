import styled from "styled-components";

export const Loginpage = styled.div`
  position: absolute;
  padding-top: 0;
  width: 100%;
  max-width: 1500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);

  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 2px solid #063160;
  width: 30%;
`;

export const BottomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: 30%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #063160;
  border-radius: 10px;
  color: white;
  margin-top: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const Petimage = styled.div`
  text-align: center;
  background-size: cover;
  background-position: center;
`;

export const Catimage = styled.img`
  width: 400;
  height: 400;
`;

export const Api = styled.img`
  border-radius: 50%;
  border: 2px solid #063160;
  width: 60;
  height: 60;
  margin: auto;
`;
export const Apss = styled.img`
  border-radius: 50%;
  border: 2px solid #063160;
  width: 60;
  height: 60;
`;
export const Apw = styled.img`
  border-radius: 50%;
  border: 2px solid #063160;
  width: 60;
  height: 60;
`;
export const Logo = styled.td`
  padding: 20px;
  justify-content: center;
`;

export const Idbox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;
export const Apilogin = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8;
`;

export const Input = styled.input.attrs({ required: true })`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  display: block;
`;

export const Colr = styled.span`
  color: #063160;
`;
export const ImageContainer = styled.div`
  margin-top: 10px;
  margin-bottom: -30px;
`;
export const Buttonbox = styled.div`
	display: flex;
	:last-child {
		margin-left: 10px;
	}
	button {
		width: 50px;
		height: 30px;
		border: none;
		background-color: #063160;
		color: #fff;
		border-radius: 5px;
	}
	a:link, a:visited {
		text-decoration: none;
		text-align: center;
		display: inline-block;
		color: #fff;
		width: 50px;
		height: 30px;
		padding-top: 3px;
		background-color: #063160;
		border-radius: 5px;

	}
  `
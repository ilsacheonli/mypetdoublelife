import styled from 'styled-components';

/* ------------------------------------------------------------------------- */
/* Mypetfeed */

export const Mypetfeedmain = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	position: relative;

`

export const FlexBox = styled.div`
	width: 1500px;
	display: flex;
  flex-wrap: wrap;
	margin-bottom: 60px;
	align-items: center;
	justify-content: center;
`

export const GridBox = styled.div`
	margin-right: 12px;
	margin-left: 12px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 25px;
	/*&:hover {
		background: linear-gradient(
        to bottom,
				rgba(159, 149, 242, 0) 65%,
				rgba(159, 149, 242, 0.25) 75%,
				rgba(159, 149, 242, 0.6) 85%,
				rgba(159, 149, 242, 0.75) 90%,
				rgba(159, 149, 242, 1) 100%
      );
      background-size: cover;
			transition: 0.1s linear;
	}*/
`;

export const H5 = styled.h5`
	margin-bottom: 8px;
	margin-left: 10px;
	position: absolute;
	bottom: 40px;
	left: 16px;
	color: #3B3B3B;
	font-weight: bold;

`
export const ImgBox = styled.div`
	width: 250px;
	height: 280px;
	position: relative;
	border-radius: 25px;
  &:hover {
		img {
			border: 5px solid #DADDE2;
			/*background: linear-gradient(
        to bottom,
				rgba(159, 149, 242, 0) 65%,
				rgba(159, 149, 242, 0.25) 75%,
				rgba(159, 149, 242, 0.6) 85%,
				rgba(159, 149, 242, 0.75) 90%,
				rgba(159, 149, 242, 1) 100%
      );*/
      background-size: cover;
			transition: 0.1s linear;
			-webkit-mask-image: linear-gradient(to top, 				
				rgba(159, 149, 242, 0.2) 0%,
				rgba(159, 149, 242, 0.25) 10%,
				rgba(159, 149, 242, 0.6) 20%,
				rgba(159, 149, 242, 0.75) 25%,
				rgba(159, 149, 242, 1) 100%);
  		mask-image: linear-gradient(to top, 				
				rgba(159, 149, 242, 0.2) 0%,
				rgba(159, 149, 242, 0.2) 10%,
				rgba(159, 149, 242, 0.6) 20%,
				rgba(159, 149, 242, 0.75) 25%,
				rgba(159, 149, 242, 1) 100%);
		}
		span, svg {
			color: #3c4da7;
    }
	}
`

export const NameBox = styled.div`
	margin-left: 5px;
	margin-right: 5px;
	display: flex;
	flex: 1;
	align-items: center;
	font-weight: bold;
	color: #808080;
	svg {
		margin-left: auto;
	}
	&:hover {
		color: #063160;
	}

`

export const Writea = styled.a`
	background-color: #fff;
	border: none;
	color: #063160;
	svg {
		width: 30px;
		height: 30px;
		position: absolute;
		bottom: 30px;
		left: 1600px;
	}
`

export const UserName = styled.span`
`

export const Like = styled.span`
`

/* ------------------------------------------------------------------------- */
/* MypetfeedView */

export const Viewcontainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 70px;
`

export const Maincontainer = styled.div`
	margin-right: 30px;
	display: flex;
	flex-direction: column;
	/*background-color: beige;*/
	h3 {
		width: 500px;
		font-weight: bold;
		margin-left: 5px;
		margin-bottom: 0.7rem;
	}
	button {
		width: 25px;
		height: 25px;
		color: bule;
		border: none;
		background-color: #fff;
	}
	a {
		width: 25px;
		height: 25px;
		margin-right: 10px;
		margin-left: auto;

	}
	svg {
		width: 25px;
		height: 25px;
	}
	.update {

		}
	.buttonDiv {
		display: flex;
		align-items: center;
	}
`

export const Petimg = styled.img`
	width: 640px;
	height: 420px;
`

export const Viewnamebox = styled.div`
	width: 630px;
	margin-bottom: 20px;
	margin-top: 7px;
	margin-left: 10px;
	display: flex;
	align-items: center;
	font-weight: bold;
	color: #808080;
	font-size: 1.3rem;
	.profileImg {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: blue;
		margin-right: 10px;
	}
	div {
		margin-left: auto;
	}
	svg {
		color: red;
		width: 23px;
		height: 23px;
		margin-right: 10px;
	}
`
export const Viewcontent = styled.div`
	width: 620px;
	height: 200px;
	margin: 10px;
	font-size: 1.2rem;
	white-space: pre-line;
	/*border: 2px solid #333;*/
`

export const InsertForm = styled.form`
	margin-top: 35px;
  background: #fff;
	border: none;
	border-bottom: 2px solid #063160;
	display: flex;
`;

export const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: none;
  width: 410px;
  outline: none;
  font-size: 1rem;
`;

export const Commentbutton = styled.button`
	border: none;
	background-color: #fff;
	svg {
		width: 33px;
		height: 33px;
		color: #063160;
	}
`;

export const Commentcontainer = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 30px;
	div {
		width: 430px;
	}
	ul {
		padding-top: 10px;
		padding-left: 5px;
	}
	li {
		list-style: none;
	}
	.idDiv {
		color: #808080;
		font-weight: bold;
	}
	.textDiv {
		margin-bottom: 10px;
		margin-left: 5px;
		font-weight: bold;
	}
`

export const Commentbox = styled.div`
	width: 400px;
	height: 700px;
	margin-top: 20px;
	/*background-color: antiquewhite;*/
	button {
	margin-left: 8px;
	margin-bottom: 5px;
    width: 25px;
    height: 25px;
    border: none;
    background-color: #fff;
  }
`;

/* ------------------------------------------------------------------------- */
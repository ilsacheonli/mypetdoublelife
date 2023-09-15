import styled from 'styled-components';

/* ------------------------------------------------------------------------- */
/* Myprofile */

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

export const Section = styled.section`
	width: 700px;
	height: 250px;
	display: flex;
	justify-content: center;
`

export const Profileimg = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 25px;
`

export const Intro = styled.div`
	width: 250px;
	height: 250px;
	margin-left: 30px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	input {
		width: 190px;
		height: 25px;
		margin-left: 10px;
	}
	textarea {
		resize: none;
		color: black;
		outline: none;
		margin-left: 10px;
		width: 160px;
		height: 50px;
	}
	p {
		display: flex;
	}
	form {
		width: 250px;
		height: 250px;
		display: flex;
		flex-direction: column;
	}
`

export const Default = styled.div`
	p {
		margin-bottom: 1.05rem;
		white-space: pre-line;
	}
`

export const Formbutton = styled.div`
	position: absolute;
	bottom: 30px;
`

export const Button = styled.div`
	position: absolute;
	bottom: 30px;
`

export const ProfileButton = styled.div`
	display: flex;
	align-items: center;
	width: 28px;
	height: 28px;
	svg {
		width: 28px;
		height: 28px;
	}
	button {
		background-color: #fff;
		border: none;
		:last-child{
			margin-left: 10px;
			margin-bottom: 10px;
		}
	}
`

export const Styledswiper = styled.div`
	.swiper-button-prev, .swiper-button-next {
		color: #063160;
	}
	.swiper {
		width: 800px;
	}
`

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
	color: #333;
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
	}
	button {
		width: 25px;
		height: 25px;
		// color: bule;
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
	margin-top: 0.7rem;

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
	/* display: inline-flex;
	align-items: center; */
	margin-left: 8px;
	// margin-bottom: 5px;
    width: 25px;
    height: 25px;
    border: none;
    background-color: #fff;
  }
`;

/* ------------------------------------------------------------------------- */
/* MyPetFeedWrite */

export const Writecontainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 40px;
	margin-bottom: 40px;
`

export const Writeform = styled.form`
	width: 700px;
	display: flex;
	flex-direction: column;

`

export const Titlediv = styled.div`
	margin-bottom: 15px;
	input {
		width: 700px;
		height: 40px;
		border: 2px solid #757678;
		border-radius: 5px;
		padding-left: 10px;
		box-shadow: none;
		outline: none;
	}

`

export const Imgdiv = styled.div`
	margin-bottom: 15px;
	height: 100px;
	border: 2px solid #757678;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	border-radius: 5px;
	label {
		cursor: pointer;
		padding: 10px;
		color: #757678;
	}
	input {
		width: 700px;
		height: 40px;
		border: 1px soild #333 ;
		display: none;
	}
	img {
		width: 100px;
		height: 96px;
		border-radius: 0 3px 3px 0;
		&:hover {
			filter: brightness(0.5);
		}
	}
`

export const Contentdiv = styled.div`
	margin-bottom: 10px;
	textarea {
		width: 700px;
		height: 450px;
		resize: none;
		outline: none;
		border-radius: 5px;
		padding: 10px;
		border: 2px solid #757678;
	}
`

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



/* ------------------------------------------------------------------------- */
/* Mypetteb */

export const Tebdiv = styled.div`
	margin-top: 30px;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
`

export const Tebbutton = styled.button`
	width: 665px;
	height: 45px;
	padding: 10px;
	border-style: none;
	border-bottom: 3px solid #d6d6d6;
	color: #d6d6d6;
	font-weight: bold;
	font-size: 1rem;
	background-color: white;
	transition: 0.5s;
	border-radius: 10px 10px 0px 0px;

	&.active {
		border-bottom: 3px solid #3b4b9b;
		color: #3b4b9b;
	}
	&:hover {
      color: #3b4b9b;
      border-bottom: 3px solid #3b4b9b;
    }
`

/* ------------------------------------------------------------------------- */
/* Mypetrecord */

export const Mypetrecordbox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`

export const MypetfullCalendar = styled.div`
	width: 650px;
	height: 550px;
	margin-top: 30px; 
`

export const Mypetrecordmemo = styled.div`
	width: 650px;
	height: 550px;
	margin-top: 30px;
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

export const Mypetrecordmemo1 = styled.div`
	width: 650px;
	height: 550px;
	border: 3px solid #063160;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`

export const Mypetrecordmemo2 = styled.div`
	width: 650px;
	height: 220px;
	border: 3px solid #063160;
	border-radius: 10px;
	position: relative;
	display: flex;
	justify-content: center;
`

/* ------------------------------------------------------------------------- */
/* Mypetlist, Mypetlistitem */

export const Listcontainer = styled.div`
	width: 600px;
	height: 200px;
	border: 1px solid #063160;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`

export const Listitem = styled.div`
	width: 600px;
	height: 45px;
	border: 1px solid #063160;
`

export const Ul = styled.ul`
	margin-top: 20px;
	margin-left: 20px;
	margin-right: 20px;
	padding-right: 32px;
`

export const Lidiv = styled.div`
	height: 480px;
	div::-webkit-scrollbar {
		display: none;
	}
`
export const Overflowdiv = styled.div`
	height: 480px;
	overflow-y: scroll;

`

export const Li = styled.li`
	list-style: none;
	line-height: 4;
	display: flex;
	justify-content: space-between;
	font-size: 1.2rem;
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
`


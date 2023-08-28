import styled from 'styled-components';

/* ------------------------------------------------------------------------- */
/* Myprofile */
export const Main = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

export const Section = styled.section`
	width: 500px;
	height: 200px;
	display: flex;
	justify-content: center;
`

export const Profileimg = styled.img`
	width: 200px;
	height: 200px;
	margin-right: 20px;
`

export const Intro = styled.div`
	
`

export const ProfileButton = styled.div`
	display: flex;
`

/* ------------------------------------------------------------------------- */
/* Mypetfeed */

export const Mypetfeedmain = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 40px;
`

export const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 60px;

`

export const GridBox = styled.div`
	width: 250px;
	height: 250px;
	margin-right: 10px;
	margin-left: 10px;
	display: flex;
	flex-direction: column;
`

export const ImgBox = styled.div`
	width: 250px;
	height: 250px;	
	position: relative;
`

export const Img = styled.img`
	width: 250px;
	height: 250px;
`

export const H3 = styled.h3`
	margin: 0;
	position: absolute;
	bottom: 5%;
	left: 5%;
`

export const NameBox = styled.div`
	display: flex;
	justify-content: space-between;

`

export const UserName = styled.div`

`

export const Like = styled.div`

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
	border-style: none;
	border-bottom: 2px solid #d3d3d3;
	color: #3f3f3f;
	font-weight: bold;
	font-size: 1rem;
	background-color: white;
	&.active {
		border-bottom: 2px solid #063160;
		color: #063160;
	}
`

/* ------------------------------------------------------------------------- */
/* Mypetrecord */

export const Mypetrecordbox = styled.div`
	display: flex;
	justify-content: center;
`

export const MypetfullCalendar = styled.div`
	width: 650px;
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
	height: 300px;
	border: 3px solid #063160;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Mypetrecordmemo2 = styled.div`
	width: 650px;
	height: 220px;
	border: 3px solid #063160;
	border-radius: 10px;
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
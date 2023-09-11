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
	color: white;

`
export const ImgBox = styled.div`
	width: 250px;
	height: 280px;
	position: relative;
	border-radius: 25px;
  &:hover {
		img {
			border: 5px solid #9f95f2;
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
			/*-webkit-mask-image: linear-gradient(to top, 				
				rgba(159, 149, 242, 0) 15%,
				rgba(159, 149, 242, 0.25) 75%,
				rgba(159, 149, 242, 0.6) 85%,
				rgba(159, 149, 242, 0.75) 90%,
				rgba(159, 149, 242, 1) 100%);
  		mask-image: linear-gradient(to top, 				
				rgba(159, 149, 242, 0) 15%,
				rgba(159, 149, 242, 0.25) 75%,
				rgba(159, 149, 242, 0.6) 85%,
				rgba(159, 149, 242, 0.75) 90%,
				rgba(159, 149, 242, 1) 100%);*/
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
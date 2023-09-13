import styled from "styled-components";

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

    div {
		width: 700px;
		height: 40px;
		border: 2px solid #757678;
		border-radius: 5px;
		padding-left: 10px;
        padding-top: 5px;
		box-shadow: none;
		outline: none;
        color: #757678;
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



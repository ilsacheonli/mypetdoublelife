import React from 'react'
import { Container, Section, Profileimg, Intro, ProfileButton } from './mypetstyled'

function Mypetprofile() {


	return (
				<Container> 
					<Section>
						<Profileimg src="" alt="" />
						<Intro>
							<p>이름 : </p>
							<p>성별 : </p>
							<p>생일 : </p>
							<p>자기소개 : </p>
							<ProfileButton>
								<div>프로필수정</div>
								<div>삭제</div>
							</ProfileButton>
						</Intro>
					</Section>
				</Container>
	)
}

export default Mypetprofile
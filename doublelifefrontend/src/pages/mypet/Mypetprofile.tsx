import React from 'react'
import MyPetProfileImg from './MyPetProfileImg'
import MyPetIntro from './MyPetIntro'
import { Container, Section } from './mypet.style'

function MyPetProfile() {

	return (
		<Container>
			<Section>
				<MyPetProfileImg />
				<MyPetIntro />
			</Section>
		</Container>
	)
}

export default MyPetProfile
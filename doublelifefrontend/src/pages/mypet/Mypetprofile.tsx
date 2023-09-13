import React from 'react'
import MyPetProfileImg from './MyPetProfileImg'
import MyPetIntro from './MyPetIntro'
import { Container, Section } from './mypet.style'

interface prop{
	petNo:number;
}

function MyPetProfile(petNoProp : prop) {

	return (
		<Container>
			<Section>
				<MyPetProfileImg petNo={petNoProp.petNo}/>
				<MyPetIntro petNo={petNoProp.petNo}/>
			</Section>
		</Container>
	)
}

export default MyPetProfile
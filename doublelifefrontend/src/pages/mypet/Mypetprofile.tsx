import React from 'react'
import MyPetProfileImg from './MyPetProfileImg'
import MyPetIntro from './MyPetIntro'
import { Container, Section } from './mypet.style'

interface prop{
	petNo:number;
	petReload:()=>void;
}

function MyPetProfile({petNo, petReload} : prop) {

	return (
		<Container>
			<Section>
				<MyPetProfileImg petNo={petNo}/>
				<MyPetIntro petNo={petNo} petReload={petReload}/>
			</Section>
		</Container>
	)
}

export default MyPetProfile
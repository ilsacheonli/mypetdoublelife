import React from 'react'
import { Listitem } from './mypet.style'

interface DisplayProps {
  value: string;
}

function Mypetlistitem(props: DisplayProps) {
	console.log(props)
	return (
		<Listitem>
			{props.value}
		</Listitem>
	)
}

export default Mypetlistitem
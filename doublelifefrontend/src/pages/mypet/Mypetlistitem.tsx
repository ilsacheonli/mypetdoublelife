import React from 'react'
import { Listitem } from './mypetstyled'

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
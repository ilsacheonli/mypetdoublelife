import React from 'react'
import Mypetlistitem from './Mypetlistitem'
import { Listcontainer } from './mypetstyled'

interface DateProps {
	selectedDate: Date;
}


function Mypetlist({ selectedDate }: DateProps) {
	return (
		<Listcontainer>
			<Mypetlistitem />
			{selectedDate.toLocaleDateString()}
		</Listcontainer>
	)
}

export default Mypetlist
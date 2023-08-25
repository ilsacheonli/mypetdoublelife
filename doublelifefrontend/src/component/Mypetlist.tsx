import React from 'react'
import Mypetlistitem from 'component/Mypetlistitem'
import { Listcontainer } from 'component/mypetstyled'

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
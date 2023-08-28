import React, {useState} from 'react'
import Mypetlistitem from './Mypetlistitem'
import { Listcontainer } from './mypet.style'

interface DateProps {
	selectedDate: Date;
}

function Mypetlist() {
	const [inputValue, setInputValue] = useState('');

	return (
		<Listcontainer>
			<Mypetlistitem value={inputValue}/>
		</Listcontainer>
	)
}

export default Mypetlist
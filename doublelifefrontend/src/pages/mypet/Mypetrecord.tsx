import React, { useState } from 'react'
import Mypetlistcreate from './Mypetlistcreate'
import Mypetlistitem from './Mypetlistitem'
import Mypetlist from './Mypetlist'
import { Mypetrecordmemo, Mypetrecordmemo1, Mypetrecordmemo2 } from './mypet.style'

function Mypetrecord() {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};
	return (

		<Mypetrecordmemo>

			<Mypetrecordmemo1>
				<Mypetlist />
			</Mypetrecordmemo1>

			<Mypetrecordmemo2>

			</Mypetrecordmemo2>
		</Mypetrecordmemo>
	)
}

export default Mypetrecord
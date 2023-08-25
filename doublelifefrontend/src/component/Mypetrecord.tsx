import React, {useState} from 'react'
import { Mypetrecordmemo, Mypetrecordmemo1, Mypetrecordmemo2 } from 'component/mypetstyled'
import Mypetlistcreate from 'component/Mypetlistcreate'

import { Event } from 'component/types';

function Mypetrecord() {

	const handleAddEvent = (event: Event) => {
    console.log('추가')
  };
	const [inputValueArray, setInputValue] = useState('');

	return (
		<Mypetrecordmemo>
			<Mypetrecordmemo1>
				<Mypetlistcreate onAddEvent={handleAddEvent} setInputValue={setInputValue}/>
			</Mypetrecordmemo1>
			<Mypetrecordmemo2>

			</Mypetrecordmemo2>
		</Mypetrecordmemo>
	)
}

export default Mypetrecord
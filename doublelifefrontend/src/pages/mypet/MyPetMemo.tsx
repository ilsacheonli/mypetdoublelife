import React, { useState } from 'react';

interface Memo {
	id: number;
	content: string;
}

function MyPetMemo() {
	const [memo, setMemo] = useState<Memo[]>([]);
	const [currentMemo, setCurrentMemo] = useState<Memo | null>(null);

	function addMomo(content: string) {
		const newMemo: Memo = {
			id: Date.now(),
			content: content,
		};
		setMemo([...memo, newMemo]);
	}

	function deleteMemo(id: number) {
		const updatedMemo = memo.filter(memo => memo.id !== id);
		setMemo(updatedMemo);
		setCurrentMemo(null);
	}

	return (
		<div>
			<textarea 
				value={currentMemo?.content || ''}
				onChange={function(e) {
					setCurrentMemo({ id: currentMemo?.id || 0, content: e.target.value});
				}}
			/>
		</div>
	);
}

export default MyPetMemo;
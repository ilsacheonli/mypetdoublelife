import React, { useState } from 'react';
import MyPetFeed from './MyPetFeed'
import MyPetMemo from './MyPetMemo'

import { Tebbutton, Tebdiv } from './mypet.style'

interface Tab {
	id: number;
	title: string;
	content: JSX.Element;
}

const tabsData: Tab[] = [
	{
		id: 1,
		title: '내 피드',
		content:
			<MyPetFeed key={1} />
	},
	{
		id: 2,
		title: '관리기록',
		content: (
			<MyPetMemo key={2} />
		),
	}
];

function MyPetTeb() {
	const [activeTab, setActiveTab] = useState<number>(tabsData[0].id);

	const handleTabClick = (tabId: number) => {
		setActiveTab(tabId);
	};

	return (
		<div>
			<Tebdiv>
				{tabsData.map((tab) => (
					<Tebbutton
						key={tab.id}
						onClick={() => handleTabClick(tab.id)}
						className={tab.id === activeTab ? 'active' : ''}
					>
						{tab.title}
					</Tebbutton>
				))}
			</Tebdiv>
			<div>
				{tabsData.map((tab) => (
					<div
						key={tab.id}
						style={{ display: tab.id === activeTab ? 'block' : 'none' }}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}

export default MyPetTeb;
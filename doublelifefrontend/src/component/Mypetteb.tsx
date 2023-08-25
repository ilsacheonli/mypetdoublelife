import React, { useState } from 'react';
import Mypetfeed from 'component/Mypetfeed'
import Mypetcalendar from 'component/Mypetcalendar'
import { Mypetrecordbox, Tebbutton, Tebdiv } from 'component/mypetstyled'

interface Tab {
  id: number;
  title: string;
  content: JSX.Element[];
}

const tabsData: Tab[] = [
  {
    id: 1,
    title: '내 피드',
    content: [
      <Mypetfeed key={1} />,
      <Mypetfeed key={2} />
    ],
  },
  {
    id: 2,
    title: '관리기록',
    content: [
			<Mypetrecordbox key={1}>
			<Mypetcalendar />,
			<div key={2}>
			</div>
			</Mypetrecordbox>
    ]
  }
];

const TabMenu: React.FC = () => {
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
};

export default TabMenu;
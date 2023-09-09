import React, { useState } from 'react';
import { Contents, TabMenu, Desc, TabContainer } from './petmunity.style';
import { Outlet, Link } from 'react-router-dom';

function Petmunity() {
      // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'Q&A', content: 'qna' },
    { name: '중고거래', content: 'trade' },
    { name: '산책 메이트', content: 'walkingmate' },
  ];

  const selectMenuHandler = (index: React.SetStateAction<number>) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <Contents>
        <TabContainer>
        <TabMenu>
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>
                <Link to={`/petmunity/${menuArr[currentTab].content}/1`}
                >
                  {el.name}
                  </Link>
              </li>
            ))}
        </TabMenu>
        </TabContainer>
        <Desc>
          <Outlet />
        </Desc>
      </Contents>
    </>
  );
}

export default Petmunity;
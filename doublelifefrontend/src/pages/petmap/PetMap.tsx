import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Contents, Desc, TabMenu } from "./petmap.style";

function PetMap () {
    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
      { name: '미용실', content: 'salon' },
      { name: '병원', content: 'hospital' },
    ];
  
    const selectMenuHandler = (index: React.SetStateAction<number>) => {
      // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
      // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
      clickTab(index);
      <Link to={`/petmap/${menuArr[currentTab].content}`}></Link>
    };
  
    return (
      <>
        <Contents>
          <TabMenu>
            {menuArr.map((el,index) => (
                <li className={index === currentTab ? "submenu focused" : "submenu" }
                onClick={() => selectMenuHandler(index)}>
                  <Link to={`/petmap/${menuArr[currentTab].content}`}
                  style={{
                    textDecoration:"none",
                    color:"#d6d6d6"
                  }}>
                    {el.name}
                    </Link>
                </li>
              ))}
          </TabMenu>
          <Desc>
            <Outlet />
          </Desc>
        </Contents>
      </>
    );
  }

export default PetMap;
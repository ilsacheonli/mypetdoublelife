import React, { useCallback, useEffect, useState } from "react";
import { PetMapList } from "./PetMapList";
import axios from "axios";
import { MapList, PetMapPagination, SearchIcon } from "./petmap.style";
import Pagination from "react-js-pagination";
import { PetMapAroundList } from "./PetMapAroundList";
import Modal from "pages/petmunity/Modal";
import styled from "styled-components";
import { ListDivide } from "./petmapcontainer.style";

declare global {
  interface Window {
    kakao: any;
  }
}

const PetMapContainer = () => {
  const [petMapList, setPetMapList] = useState<PetMapList[]>([]);
  const [currentPetMap, setCurrentPetMap] = useState<PetMapList[]>([]); // 전국 미용실 페이지네이션
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호

  const [aroundPetMap, setAroundPetMap] = useState<PetMapAroundList[]>([]);
  const [currentAroundPetMap, setCurrentAroundPetMap] =
    useState<PetMapAroundList[]>([]); // 주변 병원 페이지네이션
  const [aroundPage, setAroundPage] = useState<number>(1); // 주변 병원 현재 페이지 번호

  const [searchResults, setSearchResults] = useState<PetMapList[]>([]);
  const [currentSearchPetMap, setCurrentSearchPetMap] =
    useState<PetMapList[]>([]); // 검색 병원 페이지네이션
  const [searchPage, setSearchPage] = useState<number>(1); // 검색 병원 현재 페이지 번호


  // Modal
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  let obj;

  // 전국 병원 페이지네이션 변수
  const postPerPage = 5; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  // 주변 병원 페이지네이션 변수
  const postAroundPerPage = 5; // 페이지 당 게시글 개수
  const indexOfAroundLastPost = aroundPage * postAroundPerPage;
  const indexOfAroundFirstPost = indexOfAroundLastPost - postAroundPerPage;

  // 검색 병원 페이지네이션 변수
  const postSearchPerPage = 5; // 페이지 당 게시글 개수
  const indexOfSearchLastPost = searchPage * postSearchPerPage;
  const indexOfSearchFirstPost = indexOfSearchLastPost - postSearchPerPage;


  // 전국 병원 페이지네이션 변경 함수
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // 주변 병원 페이지네이션 변경 함수
  const handleAroundPetMapPageChange = (pageAround: number) => {
    setAroundPage(pageAround);
  };

  // 검색 병원 페이지네이션 변경 함수
  const handleSearchPetMapPageChange = (pageSearch: number) => {
    setSearchPage(pageSearch);
  };

  const getPetMapList = async () => {
    // res는 http response의 header + body를 모두 갖고 있다.
    const res = await axios.get("/pethospital");
    console.log(res.data);
    setPetMapList([...res.data]);
  };

  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    getPetMapList();

    let mapLoad = new window.kakao.maps.load(function () {
      var mapContainer = document.getElementById("map");
      var hospitalListContainer = document.getElementById("hospitalList");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var centerPosition = new window.kakao.maps.LatLng(lat, lon);

            var mapOption = {
              center: new window.kakao.maps.LatLng(lat, lon),
              level: 3,
            };

            var map = new window.kakao.maps.Map(mapContainer, mapOption);

            var clusterer = new window.kakao.maps.MarkerClusterer({
              map: map,
              averageCenter: true,
              minLevel: 7,
            });

            var infowindows: any[] = [];

            fetch(`/pethospital`)
              .then((response) => response.json())
              .then((data) => {
                var markers = [];

                for (var i = 0; i < data.length; i++) {
                  var position = new window.kakao.maps.LatLng(
                    data[i].latitude,
                    data[i].longitude
                  );
                  var marker = new window.kakao.maps.Marker({
                    position: position,
                  });

                  markers.push(marker);

                  var content = `<div style="padding: 10px;">
                                    <strong>${data[i].name}</strong><br>
                                    주소: ${data[i].address2}<br>
                                    전화번호: ${data[i].tel}<br>
                                    <p style="color:white;"></p><br>
                                </div>`;

                  var infowindow = new window.kakao.maps.InfoWindow({
                    content: content,
                    removable: true,
                    maxWidth: 500,
                  });

                  infowindows.push(infowindow);

                  window.kakao.maps.event.addListener(
                    marker,
                    "mouseover",
                    (function (marker, i) {
                      return function () {
                        infowindows.forEach(function (infowindow) {
                          infowindow.close();
                        });
                        infowindows[i].open(map, marker);
                      };
                    })(marker, i)
                  );

                  window.kakao.maps.event.addListener(
                    marker,
                    "mouseout",
                    (function (marker, i) {
                      return function () {
                        infowindows[i].close();
                      };
                    })(marker, i)
                  );
                }

                clusterer.addMarkers(markers);

                // 현재 위치에서 3km 이내의 미용실 리스트
                fetch(`/pethospital?lat=${lat}&lon=${lon}`)
                  .then((response) => response.json())
                  .then((allData) => {
                    var hospitalListJSON = []; // JSON 형식의 배열

                    for (var i = 0; i < allData.length; i++) {
                      var hospitalLat = allData[i].latitude;
                      var hospitalLon = allData[i].longitude;
                      var calculatedDistance = calculateDistance(
                        lat,
                        lon,
                        hospitalLat,
                        hospitalLon
                      );

                      if (calculatedDistance <= 3) {
                        // 3km 이내
                        var hospitalInfo = {
                          name: allData[i].name,
                          distance: calculatedDistance.toFixed(2) + "km",
                        };
                        hospitalListJSON.push(hospitalInfo);
                      }
                    }
                    // JSON.stringfy()를 사용하여 JSON 문자열로 변환
                    obj = JSON.stringify(hospitalListJSON);

                    // 받아온 JSON 정보를 aroundPetMap에 저장
                    setAroundPetMap(hospitalListJSON);
                  })
                  .catch((error) =>
                    console.error("데이터 가져오기 오류:", error)
                  );
              })
              .catch((error) => console.error("데이터 가져오기 오류:", error));
          },
          function (error) {
            var locPosition = new window.kakao.maps.LatLng(
              33.450701,
              126.570667
            ),
              message =
                "geolocation을 사용할 수 없어요.. (" + error.message + ")";

            var mapOption = {
              center: locPosition,
              level: 5,
            };

            var map = new window.kakao.maps.Map(mapContainer, mapOption);
          }
        );
      } else {
        var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
          message = "geolocation을 사용할 수 없어요..";

        var mapOption = {
          center: locPosition,
          level: 5,
        };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);
      }

      function calculateDistance(
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
      ) {
        const R = 6371; // 지구의 반지름 (단위: km)
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // 결과 거리 (단위: km)
        return distance;
      }
    });
  }, []);

  useEffect(() => {
    // getBoardList();
    setCurrentPetMap(petMapList.slice(indexOfFirstPost, indexOfLastPost));
  }, [petMapList, indexOfFirstPost, indexOfLastPost, page]);

  useEffect(() => {
    setCurrentAroundPetMap(
      aroundPetMap.slice(indexOfAroundFirstPost, indexOfAroundLastPost)
    );
  }, [aroundPetMap, indexOfAroundFirstPost, indexOfAroundLastPost, aroundPage]);

  useEffect(() => {
    setCurrentSearchPetMap(
      searchResults.slice(indexOfSearchFirstPost, indexOfSearchLastPost)
    );
  }, [searchResults, indexOfSearchFirstPost, indexOfSearchLastPost, searchPage]);


  // SearchBar 컴포넌트
  const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
  
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchSubmit = (event: React.FormEvent) => {
      // event.preventDefault(); // 검색을 실행한 후에 검색창이 사라지지 않도록 주석 처리
      onSearch(searchQuery); // 검색어를 부모 컴포넌트로 전달
    };
  

    return (
      <form onSubmit={handleSearchSubmit} style={{
        height: "45px",
        marginLeft: "80px",
        borderBottom: "2px solid #3b4b9b",
        maxWidth: "80%",
        
      }}>
        <input
          type="text"
          placeholder="시설이름을 입력하세요."
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{
            width: "90%",
            border: "none",
            outline: "none",
          }}
        />
        <button type="submit" style={{
          alignItems: "end",
          border: "none",
          backgroundColor: "white"
        }}><SearchIcon/></button>
      </form>
    );
  };

const handleSearch = (query: string) => {
  const filteredResults = petMapList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  setSearchResults(filteredResults);
};

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid",
          marginBottom: "20px",
        }}
      />
      <Main>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <ModalTitle>
              <h1>전국 병원</h1>
            </ModalTitle>
            <ModalContents>
              {/* 검색창과 버튼을 SearchBar 컴포넌트로 대체 */}
              <SearchBar onSearch={handleSearch} />
              {/* <MapList> */}
                {/* 검색 결과를 보여줍니다. */}
                {(searchResults.length > 0 ? currentSearchPetMap : currentPetMap).map(
                  (petmaplistdata) => {
                    return (
                      <>
                      <MapList>
                      <ul key={petmaplistdata.num}>
                        <li>
                          <div className="txt">
                            <div className="title" key={petmaplistdata.num}>
                              {petmaplistdata.name}
                            </div>
                            <div className="info">
                              <ul>
                                <li>주소: {petmaplistdata.address2}</li>
                                <li>전화번호: {petmaplistdata.tel}</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      </MapList>
                      
                      
                      </>
                    );
                  }
                )}
              {/* </MapList> */}
              {searchResults.length > 0 ?
                      <PetMapPagination>
                      <Pagination
                        activePage={searchPage}
                        itemsCountPerPage={postSearchPerPage}
                        totalItemsCount={searchResults.length}
                        pageRangeDisplayed={5}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handleSearchPetMapPageChange}
                      />
                    </PetMapPagination>
                    :
                    <PetMapPagination>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={postPerPage}
                  totalItemsCount={petMapList.length}
                  pageRangeDisplayed={5}
                  prevPageText={"<"}
                  nextPageText={">"}
                  onChange={handlePageChange}
                />
              </PetMapPagination>

                      }
            </ModalContents>
            <CloseButton
              onClick={() => {
                setOpenModal(!isOpenModal);
              }}
            >
              Close
            </CloseButton>
          </Modal>
        )}
        <DialogButton onClick={onClickToggleModal}>
          전국 병원 보러 가기
        </DialogButton>
      </Main>

      <ListDivide>주변 병원</ListDivide>

      <MapList>
        {currentAroundPetMap &&
          currentAroundPetMap.map((aroundlistdata) => {
            return (
              <ul>
                <li>
                  <div className="txt">
                    <div className="title" key={aroundlistdata.name}>
                      {aroundlistdata.name}
                    </div>
                    <div className="info">
                      <ul>
                        <li>distance: {aroundlistdata.distance}</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
      </MapList>
      <PetMapPagination>
        <Pagination
          activePage={aroundPage}
          itemsCountPerPage={postAroundPerPage}
          totalItemsCount={aroundPetMap.length}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handleAroundPetMapPageChange}
        />
      </PetMapPagination>
    </>
  );
};

export default PetMapContainer;

const Main = styled.main`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.div`
  color: #3b4b9b;
  margin-top: 30px;
  font-size: 32px;
`;
const ModalContents = styled.div`
  color: #3b4b9b;
  margin-top: 10px;
  font-size: 18px;
`;

const DialogButton = styled.button`
  width: auto;
  height: auto;
  background-color: #3b4b9b;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 50px;
  margin-bottom: 10px;
  padding: 5px 10px 5px 10px;
  border: none;
  cursor: pointer;
`;
const CloseButton = styled.button`
  background: none;
  color: gray;
  border: 2px solid;
  padding: 5px 20px;
  font-size: 18px;
  transition: color 0.2s, border-color 1s, transform 0.5s;
  position: absolute;
  bottom: 10px;
  right: 20px;

  cursor: pointer;

  &:hover {
    border-color: black;
    color: black;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-5px);
    cursor: pointer;
  }
`; 
import React, { useEffect, useState } from "react";
import { PetMapList } from "./PetMapList";
import axios from "axios";
import { MapList, PetMapPagination } from "./petmap.style";
import Pagination from "react-js-pagination";
import { PetMapAroundList } from "./PetMapAroundList";
import { ListDivide } from "./petmapcontainer.style";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

const PetMapContainerSalon = () => {
  const [petMapList, setPetMapList] = useState<PetMapList[]>([]);
  const [currentPetMap, setCurrentPetMap] = useState<PetMapList[]>(petMapList); // 전국 미용실 페이지네이션
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호

  const [aroundPetMap, setAroundPetMap] = useState<PetMapAroundList[]>([]);
  const [currentAroundPetMap, setCurrentAroundPetMap] = useState<PetMapAroundList[]>(aroundPetMap); // 주변 미용실 페이지네이션
  const [aroundPage, setAroundPage] = useState<number>(1); // 주변 미용실 현재 페이지 번호

  let obj;

  // 전국 미용실 페이지네이션 변수
  const postPerPage = 5; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  // 주변 미용실 페이지네이션 변수
  const postAroundPerPage = 5; // 페이지 당 게시글 개수
  const indexOfAroundLastPost = aroundPage * postAroundPerPage;
  const indexOfAroundFirstPost = indexOfAroundLastPost - postAroundPerPage;

  // 전국 미용실 페이지네이션 변경 함수
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // 주변 미용실 페이지네이션 변경 함수
  const handleAroundPetMapPageChange = (pageAround: number) => {
    setAroundPage(pageAround);
  }

  const getPetMapList = async () => {
    // res는 http response의 header + body를 모두 갖고 있다.
    const res = await axios.get("/petsalon");
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
      var hospitalListContainer = document.getElementById("salonList");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var centerPosition = new window.kakao.maps.LatLng(lat, lon);

            var mapOption = {
              center: new window.kakao.maps.LatLng(lat, lon),
              level: 5,
            };

            var map = new window.kakao.maps.Map(mapContainer, mapOption);

            var clusterer = new window.kakao.maps.MarkerClusterer({
              map: map,
              averageCenter: true,
              minLevel: 10,
            });

            var infowindows: any[] = [];

            fetch(`/petsalon`)
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
                                    전화번호: ${data[i].tel}
                                </div>`;

                  var infowindow = new window.kakao.maps.InfoWindow({
                    content: content,
                    removable: true,
                    maxWidth: 300,
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
                fetch(`/petsalon?lat=${lat}&lon=${lon}`)
                  .then((response) => response.json())
                  .then((allData) => {
                    var salonListJSON = []; // JSON 형식의 배열

                    for (var i = 0; i < allData.length; i++) {
                      var salonLat = allData[i].latitude;
                      var salonLon = allData[i].longitude;
                      var calculatedDistance = calculateDistance(
                        lat,
                        lon,
                        salonLat,
                        salonLon
                      );

                      if (calculatedDistance <= 3) {
                        // 3km 이내
                        var salonInfo = {
                          name: allData[i].name,
                          distance: calculatedDistance.toFixed(2) + "km"
                        };
                        salonListJSON.push(salonInfo);
                        }
                    }
                    // JSON.stringfy()를 사용하여 JSON 문자열로 변환
                    obj = JSON.stringify(salonListJSON);

                    // 받아온 JSON 정보를 aroundPetMap에 저장
                    setAroundPetMap(salonListJSON);
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
    setCurrentAroundPetMap(aroundPetMap.slice(indexOfAroundFirstPost, indexOfAroundLastPost));
  }, [aroundPetMap, indexOfAroundFirstPost, indexOfAroundLastPost, aroundPage]);

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

        <ListDivide>
            주변 미용실
        </ListDivide>

        <MapList>
        {
        currentAroundPetMap &&
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
        })
      }

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

      
        <ListDivide>
            전국 미용실
        </ListDivide>      

      <MapList>
        {currentPetMap &&
          currentPetMap.map((petmaplistdata) => {
            return (
              <>
              <ul>
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
              
              </>
            );
          })}
      </MapList>
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
    </>
  );
};

export default PetMapContainerSalon;

import React, { useEffect, useState } from 'react';
import { PetMapList } from './PetMapList';
import axios from 'axios';

declare global {
    interface Window {
        kakao: any;
    }
}

const PetMapContainer = () => {
    const [petMapList, setPetMapList] = useState<PetMapList[]>([]);


  const getPetMapList = async () => {
    // res는 http response의 header + body를 모두 갖고 있다.
    const res  = await axios.get('/pethospital');
    console.log(res.data);
    setPetMapList([...res.data]);
  }

    useEffect(() => {

        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };
    
        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
        getPetMapList();

        let mapLoad = new window.kakao.maps.load(function () {
            var mapContainer = document.getElementById('map');
            var hospitalListContainer = document.getElementById('hospitalList');
    
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
    
                    var centerPosition = new window.kakao.maps.LatLng(lat, lon);
    
                    var mapOption = {
                        center: new window.kakao.maps.LatLng(lat, lon),
                        level: 5
                    };
    
                    var map = new window.kakao.maps.Map(mapContainer, mapOption);
    
                    var clusterer = new window.kakao.maps.MarkerClusterer({
                        map: map,
                        averageCenter: true,
                        minLevel: 10
                    });
    
                    var infowindows: any[] = [];
    
                    fetch(`/pethospital`)
                        .then(response => response.json())
                        .then(data => {
                            var markers = [];
    
                            for (var i = 0; i < data.length; i++) {
                                var position = new window.kakao.maps.LatLng(data[i].latitude, data[i].longitude);
                                var marker = new window.kakao.maps.Marker({
                                    position: position
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
                                    maxWidth: 300
                                });
    
                                infowindows.push(infowindow);
    
                                window.kakao.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                                    return function() {
                                        infowindows.forEach(function(infowindow) {
                                            infowindow.close();
                                        });
                                        infowindows[i].open(map, marker);
                                    }
                                })(marker, i));
    
                                window.kakao.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
                                    return function() {
                                        infowindows[i].close();
                                    }
                                })(marker, i));
                            }
    
                            clusterer.addMarkers(markers);
    
                            // 현재 위치에서 5km 이내의 병원 리스트
                            fetch(`/pethospital?lat=${lat}&lon=${lon}`)
                                .then(response => response.json())
                                .then(allData => {
                                    var hospitalListHTML = '';
    
                                    for (var i = 0; i < allData.length; i++) {
                                        var hospitalLat = allData[i].latitude;
                                        var hospitalLon = allData[i].longitude;
                                        var calculatedDistance = calculateDistance(lat, lon, hospitalLat, hospitalLon);
    
                                        if (calculatedDistance <= 5) { // 5km 이내
                                            hospitalListHTML += `<li>${allData[i].name} - ${allData[i].address2} - ${allData[i].tel}</li>`;
                                        }
                                    }
                                    if (hospitalListContainer === null) return <></>;
                                    hospitalListContainer.innerHTML = `<ul>${hospitalListHTML}</ul>`;
                                })
                                .catch(error => console.error('데이터 가져오기 오류:', error));
                        })
                        .catch(error => console.error('데이터 가져오기 오류:', error));
                }, function(error) {
                    var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
                        message = 'geolocation을 사용할 수 없어요.. (' + error.message + ')';
    
                    var mapOption = {
                        center: locPosition,
                        level: 5
                    };
    
                    var map = new window.kakao.maps.Map(mapContainer, mapOption);
                });
            } else {
                var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
                    message = 'geolocation을 사용할 수 없어요..'
    
                var mapOption = {
                    center: locPosition,
                    level: 5
                };
    
                var map = new window.kakao.maps.Map(mapContainer, mapOption);
            }
    
            function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
                const R = 6371; // 지구의 반지름 (단위: km)
                const dLat = (lat2 - lat1) * (Math.PI / 180);
                const dLon = (lon2 - lon1) * (Math.PI / 180);
                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c; // 결과 거리 (단위: km)
                return distance;
            }
        });

      }, [])

      

    return (
        <>
        <div id="map" style={{ width: "100%",
            height: "500px",
            border: "1px solid" }} />
            <div>
                {petMapList &&
                petMapList.map((petmaptest) => {
                    return (
                        <div key={petmaptest.num}>
                        <p>name: {petmaptest.name}</p>
                        <p>tel: {petmaptest.tel}</p>
                        <p>latitude: {petmaptest.latitude}</p>
                        </div>
                    )
                })}
            </div>
            </>
    );
}

export default PetMapContainer;
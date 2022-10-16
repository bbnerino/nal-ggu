import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

interface Props {
  address: string;
}

interface AddressItemV2 {
  roadAddress: string;
  jibunAddress: string;
  englishAddress: string;
  addressElements: Array<{
      code: string;
      longName: string;
      shortName: string;
      types:
      | 'SIDO'
      | 'SIGUGUN'
      | 'RI'
      | 'ROAD_NAME'
      | 'BUILDING_NUMBER'
      | 'BUILDING_NAME'
      | 'LAND_NUMBER'
      | 'POSTAL_CODE';
  }>;
  x: string;
  y: string;
  distance: string;
}

const Map = ({ address }: Props) => {
  const [result, setResult] = useState<AddressItemV2[]>()

  useEffect(() => {
    let map = null;
    const initMap = () => {
      // const map = new naver.maps.Map("map", {
      //   center: new naver.maps.LatLng(37.511337, 127.012084),
      //   zoom: 13,
      // });
      naver.maps.Service.geocode({
        query : address 
      }, function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }

        // let result = response.result, // 검색 결과의 컨테이너
        //   items = result.items; // 검색 결과의 배열
        console.log(response);
        console.log(response.v2.addresses);
        // do Something
        setResult(response.v2.addresses)
      });
    }
    initMap();
  }, [address])

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "80%",
    height: "600px",
  };

  return result
}

export default Map

// function searchAddressToCoordinate(address) {
//   naver.maps.Service.geocode({
//       query: address
//   }, function(status, response) {
//       if (status === naver.maps.Service.Status.ERROR) {
//           return alert('Something Wrong!');
//       }

//       if (response.v2.meta.totalCount === 0) {
//           return alert('totalCount' + response.v2.meta.totalCount);
//       }

//       var htmlAddresses = [],
//           item = response.v2.addresses[0],
//           point = new naver.maps.Point(item.x, item.y);

//       if (item.roadAddress) {
//           htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
//       }

//       if (item.jibunAddress) {
//           htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
//       }

//       if (item.englishAddress) {
//           htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
//       }

//       infoWindow.setContent([
//           '<div style="padding:10px;min-width:200px;line-height:150%;">',
//           '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
//           htmlAddresses.join('<br />'),
//           '</div>'
//       ].join('\n'));

//       map.setCenter(point);
//   });
// }

// function searchCoordinateToAddress(latlng) {


//   naver.maps.Service.reverseGeocode({
//       coords: latlng,
//       orders: [
//           naver.maps.Service.OrderType.ADDR,
//           naver.maps.Service.OrderType.ROAD_ADDR
//       ].join(',')
//   }, function(status, response) {
//       if (status === naver.maps.Service.Status.ERROR) {
//           return alert('Something Wrong!');
//       }

//       var items = response.v2.results,
//           address = '',
//           htmlAddresses = [];

//       for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
//           item = items[i];
//           address = makeAddress(item) || '';
//           addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

//           htmlAddresses.push((i+1) +'. '+ addrType +' '+ address);
//       }

//   });
// }

// function makeAddress(item) {
//   if (!item) {
//       return;
//   }

//   var name = item.name,
//       region = item.region,
//       land = item.land,
//       isRoadAddress = name === 'roadaddr';

//   var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

//   if (hasArea(region.area1)) {
//       sido = region.area1.name;
//   }

//   if (hasArea(region.area2)) {
//       sigugun = region.area2.name;
//   }

//   if (hasArea(region.area3)) {
//       dongmyun = region.area3.name;
//   }

//   if (hasArea(region.area4)) {
//       ri = region.area4.name;
//   }

//   if (land) {
//       if (hasData(land.number1)) {
//           if (hasData(land.type) && land.type === '2') {
//               rest += '산';
//           }

//           rest += land.number1;

//           if (hasData(land.number2)) {
//               rest += ('-' + land.number2);
//           }
//       }

//       if (isRoadAddress === true) {
//           if (checkLastString(dongmyun, '면')) {
//               ri = land.name;
//           } else {
//               dongmyun = land.name;
//               ri = '';
//           }

//           if (hasAddition(land.addition0)) {
//               rest += ' ' + land.addition0.value;
//           }
//       }
//   }

//   return [sido, sigugun, dongmyun, ri, rest].join(' ');
// }

// function hasArea(area) {
//   return !!(area && area.name && area.name !== '');
// }

// function hasData(data) {
//   return !!(data && data !== '');
// }

// function checkLastString (word, lastString) {
//   return new RegExp(lastString + '$').test(word);
// }

// function hasAddition (addition) {
//   return !!(addition && addition.value);
// }

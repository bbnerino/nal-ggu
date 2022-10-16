import { useEffect, useState } from "react";

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
      | "SIDO"
      | "SIGUGUN"
      | "RI"
      | "ROAD_NAME"
      | "BUILDING_NUMBER"
      | "BUILDING_NAME"
      | "LAND_NUMBER"
      | "POSTAL_CODE";
  }>;
  x: string;
  y: string;
  distance: string;
}

const Map = ({ address }: Props) => {
  const [result, setResult] = useState<AddressItemV2[]>();

  useEffect(() => {
    const initMap = () => {
      naver.maps.Service.geocode({
        query : address 
      }, (status: any, response: any) => {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }
        console.log(response.v2.addresses);
        setResult(response.v2.addresses)
      });
    }
    initMap();
  }, [address])

  return result;
};

export default Map;

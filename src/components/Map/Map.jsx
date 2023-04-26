import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import Taxi from "../../assets/images/taxi.png";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/GetData";
import { useEffect, useState } from "react";

function CityMap() {
  const [data, setData] = useState([]);
  const { getdata } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(getData({ url: "location.json" }));
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (getdata.status === "success") {
      setData(getdata.data);
    }
  }, [getdata]);

  const defaultState = {
    center: [41.307, 69.256],
    zoom: 11,
  };

  return (
    <YMaps>
      <Map
        defaultState={defaultState}
        style={{
          width: "100%",
          minHeight: "434px",
          height: "100%",
          boxShadow: "0 0 10px #C3C3C3",
        }}
      >
        {data?.length !== 0 &&
          data.map((item) => {
            return (
              <Placemark
                key={item.longitude + "+"}
                geometry={[item.longitude, item.latitude]}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: Taxi,
                  iconImageSize: [25, 25],
                }}
              />
            );
          })}
        <GeolocationControl options={{ float: "left" }} />
        <FullscreenControl options={{ float: "left" }} />
        <ZoomControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
}

export default CityMap;

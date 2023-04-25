import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function CityMap() {
  const defaultState = {
    center: [41.307, 69.256],
    zoom: 11,
  };

  return (
    <YMaps>
      <Map
        defaultState={defaultState}
        style={{ width: "100%", height: "100%", boxShadow: "0 0 10px #C3C3C3" }}
      >
        <Placemark geometry={[42.507, 70.756]} />
      </Map>
    </YMaps>
  );
}

export default CityMap;

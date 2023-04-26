import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import Taxi from "../../assets/images/taxi.png";

function CityMap() {
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
        <Placemark
          geometry={[41.307, 69.256]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.38302053274963, 69.22854060572853]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.27, 69.18]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.269, 69.35]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.35364779122482, 69.17498225697933]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.24893191649671, 69.21892756877355]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.29125118140653, 69.21274775930249]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.308790148177415, 69.22373408725105]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <Placemark
          geometry={[41.28454385940804, 69.26561946255491]}
          options={{
            iconLayout: "default#image",
            iconImageHref: Taxi,
            iconImageSize: [25, 25],
          }}
        />
        <GeolocationControl options={{ float: "left" }} />
        <FullscreenControl options={{ float: "left" }} />
        <ZoomControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
}

export default CityMap;

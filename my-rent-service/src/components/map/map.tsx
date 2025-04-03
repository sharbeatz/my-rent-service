import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CityOffer, OfferLocation } from "../../types/offer";
import L from "leaflet";
import { iconUrl } from "../../const";

// Создание кастомного маркера
const customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

type MapProps = {
  location: OfferLocation[];
  city: CityOffer[];
};

function Map({ location, city }: MapProps) {
  return (
    <MapContainer
      center={[52.374, 4.88969]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location.map((item, index) => (
        <Marker key={index} position={[item.latitude, item.longitude]} icon={customIcon}>
          <Popup>
            Координаты: {item.latitude}, {item.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export { Map };

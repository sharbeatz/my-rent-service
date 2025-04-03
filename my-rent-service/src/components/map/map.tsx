// components/map/map.tsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CityOffer, OfferLocation } from "../../types/offer";
import L from "leaflet";
import { iconUrl } from "../../const";
import { useEffect } from "react"; // Добавляем импорт

// Добавляем компонент для обновления карты
function UpdateMapView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

type MapProps = {
  locations: OfferLocation[];
  city: CityOffer | undefined;
};

function Map({ locations, city }: MapProps) {
  if (!city) {
    return null;
  }

  return (
    <MapContainer
      center={[city.location.latitude, city.location.longitude]}
      zoom={city.location.zoom}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
      key={`${city.location.latitude}-${city.location.longitude}`} // Важно для пересоздания карты
    >
      <UpdateMapView
        center={[city.location.latitude, city.location.longitude]}
        zoom={city.location.zoom}
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.latitude, location.longitude]}
          icon={customIcon}
        >
          <Popup>
            Координаты: {location.latitude}, {location.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export { Map };
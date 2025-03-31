import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CityOffer, OfferLocation } from "../../types/offer";

type MapProps = {
  location: OfferLocation[];
  city: CityOffer[];
}

function Map({location, city}: MapProps) {
  console.log(location);
  console.log(city)
  return (
    
      <MapContainer
        center={[52.374, 4.88969]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%' }}
      >
          <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {location.map((item)=> <Marker position={[item.latitude, item.longitude]}></Marker>)}
      </MapContainer>
  )
}

export {Map}
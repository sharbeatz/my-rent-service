import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        id: '1232332',
        title: 'Wood and stone place',
        description: "A new tema",
        type: 'appartament',
        price: 370,
        images: [
            'apartment-01.jpg',
            'apartment-small-03.jpg',
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.8561,
                longitude: 2.432,
                zoom: 13
            }
           
        },
        location: {
            latitude: 48.8561,
            longitude: 2.432,
            zoom: 13
        },
        goods: [
            'WiFi',
            'Washer',
            'Baby seat'
        ],
        host: {
            isPro: true,
            name: 'Angelina',
            avatarUrl: 'avatar-angelina.jpg'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 2,
        maxAdults: 3,
    },

    {
        id: '1',
        title: 'Уютная квартира в центре',
        description: 'Прекрасная квартира с видом на парк',
        type: 'apartment',
        price: 120,
        images: ['img/apartment-01.jpg'],
        city: {
          name: 'Амстердам',
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          }
        },
        location: { 
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        },
        goods: ['Wi-Fi', 'Кухня', 'Парковка'],
        host: {
          avatarUrl: 'avatar-angelina.jpg',
          name: 'Angelina',
          isPro: true
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.8,
        bedrooms: 3,
        maxAdults: 4
      }

]

export {offers};
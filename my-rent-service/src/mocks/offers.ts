import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        id: '2',
        title: 'Wood and stone place',
        description: "A new tema",
        type: 'Appartament',
        price: 370,
        images: [
            '/img/apartment-01.jpg',
            '/img/apartment-02.jpg',
            '/img/apartment-03.jpg'
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
            avatarUrl: '/img/avatar-angelina.jpg'
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
        type: 'Apartment',
        price: 130,
        images: [
          '/img/apartment-01.jpg',
          '/img/apartment-02.jpg'
        ],
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
          avatarUrl: '/img/sonya-avatar.jpg',
          name: 'Sonya',
          isPro: false
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.5,
        bedrooms: 3,
        maxAdults: 3
      }

]

export {offers};
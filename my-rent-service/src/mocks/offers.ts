import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        id: '1',
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
        id: '2',
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
      },
      {
        id: '3',
        title: 'Современные апартаменты с террасой',
        description: 'Просторная квартира с видом на город',
        type: 'Apartment',
        price: 200,
        images: [
            '/img/apartment-04.jpg',
            '/img/apartment-05.jpg'
        ],
        city: {
            name: 'Барселона',
            location: {
                latitude: 41.3851,
                longitude: 2.1734,
                zoom: 12
            }
        },
        location: {
            latitude: 41.3801,
            longitude: 2.1805,
            zoom: 12
        },
        goods: ['Wi-Fi', 'Кофемашина', 'Кондиционер'],
        host: {
            avatarUrl: '/img/avatar-max.jpg',
            name: 'Max',
            isPro: true
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.7,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: '4',
        title: 'Стильный лофт в центре Берлина',
        description: 'Просторный лофт с панорамными окнами',
        type: 'Loft',
        price: 250,
        images: [
            '/img/hata3-1.jpg',
            '/img/hata3-2.jpg'
        ],
        city: {
            name: 'Берлин',
            location: {
                latitude: 52.5200,
                longitude: 13.4050,
                zoom: 13
            }
        },
        location: {
            latitude: 52.5155,
            longitude: 13.3875,
            zoom: 13
        },
        goods: ['Wi-Fi', 'Камин', 'Парковка'],
        host: {
            avatarUrl: '/img/Lenar.jpg',
            name: 'Lenar & Arthur',
            isPro: false
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.8,
        bedrooms: 2,
        maxAdults: 4
    }

]

export {offers};
import { OfferList } from "../types/offer";

export const offersList: OfferList[] = [
  {
    'id': '1',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 370,
    'previewImage': 'img/apartment-01.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': '2',
    'title': 'Modern city loft',
    'type': 'apartment',
    'price': 500,
    'previewImage': 'img/apartment-02.jpg',
    'city': {
      'name': 'London',
      'location': {
        'latitude': 51.5074,
        'longitude': -0.1278,
        'zoom': 12
      }
    },
    'location': {
      'latitude': 51.509865,
      'longitude': -0.118092,
      'zoom': 14
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },
  {
    'id': '3',
    'title': 'Cozy countryside cabin',
    'type': 'house',
    'price': 250,
    'previewImage': 'img/apartment-03.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3676,
        'longitude': 4.9041,
        'zoom': 11
      }
    },
    'location': {
      'latitude': 52.3784,
      'longitude': 4.8879,
      'zoom': 15
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '4',
    'title': 'Легендарное Халева 3',
    'type': 'house',
    'price': 5,
    'previewImage': '/img/hata3-1.jpg',
    'city': {
      'name': 'Miami',
      'location': {
        'latitude': 25.7617,
        'longitude': -80.1918,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 25.7751,
      'longitude': -80.1883,
      'zoom': 14
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5,
  },
  {
    'id': '5',
    'title': 'Luxury penthouse with a view',
    'type': 'apartment',
    'price': 1500,
    'previewImage': '5.jpg',
    'city': {
      'name': 'New York',
      'location': {
        'latitude': 40.7128,
        'longitude': -74.0060,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 40.730610,
      'longitude': -73.935242,
      'zoom': 15
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.5
  }
];

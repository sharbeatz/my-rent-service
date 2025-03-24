import { OfferList } from "../types/offer";

export const offersList: OfferList[] = [
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 370,
    'previewImage': '1.jpg',
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
    'id': 'bc39b30e-b2b4-49a9-a4c9-378d8cb9ef6a',
    'title': 'Modern city loft',
    'type': 'apartment',
    'price': 500,
    'previewImage': '2.jpg',
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
    'id': 'fdb8d030-13b1-4f37-8aab-d6748355c076',
    'title': 'Cozy countryside cabin',
    'type': 'house',
    'price': 250,
    'previewImage': '3.jpg',
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
    'rating': 4.7
  },
  {
    'id': '7f345e80-51f7-4746-b99a-c76e7f1f6b22',
    'title': 'Spacious beach house',
    'type': 'house',
    'price': 1200,
    'previewImage': '4.jpg',
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
    'isPremium': true,
    'rating': 5.0
  },
  {
    'id': 'ccf849b3-d52d-4edb-bad9-d907ab7684cb',
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
    'rating': 4.8
  }
];

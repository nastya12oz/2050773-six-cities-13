import { Offer, OfferDescription } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': '1',
    'title': 'Dirty and dangerous city',
    'type': 'apartment',
    'price': 300,
    'city': {
      'name': 'San Francisco',
      'location':  {
        'latitude': 37.7749,
        'longitude': 122.4194,
        'zoom': 8
      },
    },
    'location':  {
      'latitude': 37.7749,
      'longitude': 122.4194,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'https://loremflickr.com/320/240?lock=1'
  },
  {
    'id': '2',
    'title': 'Gentrified and overpriced',
    'type': 'room',
    'price': 200,
    'city': {
      'name': 'Amsterdam',
      'location':  {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      },
    },
    'location':  {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1,
    'previewImage': 'https://loremflickr.com/320/240?lock=2'
  },
  {
    'id': '3',
    'title': 'Cheap and sexy',
    'type': 'flat',
    'price': 90,
    'city': {
      'name': 'Berlin',
      'location':  {
        'latitude': 52.5200,
        'longitude': 13.4050,
        'zoom': 8
      },
    },
    'location':  {
      'latitude':52.5200,
      'longitude': 13.4050,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1,
    'previewImage': 'https://loremflickr.com/320/240?lock=3'
  },
  {
    'id': '4',
    'title': 'Fun and cool',
    'type': 'studio',
    'price': 70,
    'city': {
      'name': 'Belgrade',
      'location':  {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      },
    },
    'location':  {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1,
    'previewImage': 'https://loremflickr.com/320/240?lock=4'
  }

];

export const offersCard: OfferDescription[] = [
  {
    description:
      'Blah blah something.',
    bedrooms: 1,
    goods: ['Heating', 'Kitchen'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 2,
  },
];

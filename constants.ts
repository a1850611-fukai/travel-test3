import { DayItinerary, ActivityType } from './types';

export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 1,
    date: "12/3",
    displayDate: "Dec 3",
    weekday: "Tuesday",
    title: "Arrival & Classic Bangkok",
    location: "Bangkok",
    activities: [
      {
        id: "d1-1",
        time: "12:00",
        title: "Arrive in Bangkok City",
        location: "Bangkok City Center",
        type: ActivityType.Transport,
        mapsQuery: "Bangkok City Center",
        description: "Check-in and drop luggage."
      },
      {
        id: "d1-2",
        time: "13:30",
        title: "Chao Phraya Blue Boat",
        location: "Sathorn Pier",
        type: ActivityType.Sightseeing,
        mapsQuery: "Sathorn Pier",
        description: "Take the hop-on-hop-off blue boat for scenic river views."
      },
      {
        id: "d1-3",
        time: "14:30",
        title: "The Grand Palace & Wat Phra Kaew",
        location: "The Grand Palace",
        type: ActivityType.Sightseeing,
        mapsQuery: "The Grand Palace Bangkok",
        description: "Dress code strict: No shorts or sleeveless shirts."
      },
      {
        id: "d1-4",
        time: "16:00",
        title: "Wat Pho (Reclining Buddha)",
        location: "Wat Pho",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Pho",
        description: "Famous for the giant reclining Buddha and traditional massage school."
      },
      {
        id: "d1-5",
        time: "18:00",
        title: "Wat Arun Night View",
        location: "Wat Arun / Opposite River Bank",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Arun",
        description: "Best viewed from the opposite side of the river at sunset."
      },
      {
        id: "d1-6",
        time: "19:30",
        title: "Dinner at Talat Phlu",
        location: "Talat Phlu Market",
        type: ActivityType.Food,
        mapsQuery: "Talat Phlu Market",
        description: "Authentic local street food via MRT to Talat Phlu station."
      }
    ]
  },
  {
    id: 2,
    date: "12/4",
    displayDate: "Dec 4",
    weekday: "Wednesday",
    title: "Ancient Ayutthaya",
    location: "Ayutthaya",
    activities: [
      {
        id: "d2-1",
        time: "08:00",
        title: "Mini Van to Ayutthaya",
        location: "Mo Chit Van Terminal",
        type: ActivityType.Transport,
        mapsQuery: "Mo Chit New Van Terminal",
        bookingId: "VAN-BKK-AYT-001"
      },
      {
        id: "d2-2",
        time: "10:00",
        title: "Wat Mahathat",
        location: "Ayutthaya Historical Park",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Mahathat Ayutthaya",
        description: "Famous Buddha head in tree roots."
      },
      {
        id: "d2-3",
        time: "11:30",
        title: "Wat Chaiwatthanaram",
        location: "Ayutthaya",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Chaiwatthanaram",
        description: "Khmer style temple, great for photos in Thai dress."
      },
      {
        id: "d2-4",
        time: "13:00",
        title: "Wat Phra Si Sanphet",
        location: "Ayutthaya",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Phra Si Sanphet",
        description: "The holiest temple on the site of the old Royal Palace."
      },
      {
        id: "d2-5",
        time: "14:30",
        title: "Wat Ratchaburana",
        location: "Ayutthaya",
        type: ActivityType.Sightseeing,
        mapsQuery: "Wat Ratchaburana"
      },
      {
        id: "d2-6",
        time: "16:30",
        title: "Train to Don Mueang",
        location: "Ayutthaya Railway Station",
        type: ActivityType.Transport,
        mapsQuery: "Ayutthaya Railway Station",
        description: "Scenic local train ride back towards Bangkok outskirts."
      },
      {
        id: "d2-7",
        time: "18:30",
        title: "Save One Go Market",
        location: "Near Don Mueang",
        type: ActivityType.Food,
        mapsQuery: "Save One Go Market",
        description: "Transfer via Grab from station. Vibrant night market."
      }
    ]
  },
  {
    id: 3,
    date: "12/5",
    displayDate: "Dec 5",
    weekday: "Thursday",
    title: "Gentle Giants",
    location: "Kanchanaburi",
    activities: [
      {
        id: "d3-1",
        time: "07:30",
        title: "Private Car Pickup",
        location: "Hotel Lobby",
        type: ActivityType.Transport,
        mapsQuery: "",
        bookingId: "CAR-PVT-889",
        description: "Driver: Mr. Somchai (+66 81 234 5678)"
      },
      {
        id: "d3-2",
        time: "10:00",
        title: "Somboon Legacy Foundation",
        location: "Kanchanaburi",
        type: ActivityType.Sightseeing,
        mapsQuery: "Somboon Legacy Foundation",
        description: "Hands-Off Elephant Sanctuary. Observe elephants in nature ethically.",
        bookingId: "TICKET-ELE-55"
      },
      {
        id: "d3-3",
        time: "16:00",
        title: "Return Trip",
        location: "En route to Bangkok",
        type: ActivityType.Transport,
        mapsQuery: "",
        description: "Relaxing drive back."
      }
    ]
  },
  {
    id: 4,
    date: "12/6",
    displayDate: "Dec 6",
    weekday: "Friday",
    title: "Floating Markets",
    location: "Samut Songkhram",
    activities: [
      {
        id: "d4-1",
        time: "07:00",
        title: "Private Car Pickup",
        location: "Hotel Lobby",
        type: ActivityType.Transport,
        mapsQuery: "",
        bookingId: "CAR-PVT-890"
      },
      {
        id: "d4-2",
        time: "09:00",
        title: "Damnoen Saduak Floating Market",
        location: "Damnoen Saduak",
        type: ActivityType.Sightseeing,
        mapsQuery: "Damnoen Saduak Floating Market",
        description: "The most famous floating market. Boat ride included."
      },
      {
        id: "d4-3",
        time: "11:30",
        title: "Maeklong Railway Market",
        location: "Maeklong",
        type: ActivityType.Sightseeing,
        mapsQuery: "Maeklong Railway Market",
        description: "Watch the train pass directly through the market stalls."
      },
      {
        id: "d4-4",
        time: "14:00",
        title: "Amphawa Floating Market",
        location: "Amphawa",
        type: ActivityType.Sightseeing,
        mapsQuery: "Amphawa Floating Market",
        description: "More authentic local feel. Enjoy seafood by the canal."
      }
    ]
  },
  {
    id: 5,
    date: "12/7",
    displayDate: "Dec 7",
    weekday: "Saturday",
    title: "Heritage & Vintage",
    location: "Samut Prakan / Bangkok",
    activities: [
      {
        id: "d5-1",
        time: "09:00",
        title: "BTS to Kheha -> Songthaew",
        location: "BTS Skytrain",
        type: ActivityType.Transport,
        mapsQuery: "BTS Kheha Station"
      },
      {
        id: "d5-2",
        time: "10:30",
        title: "Ancient City (Muang Boran)",
        location: "Samut Prakan",
        type: ActivityType.Sightseeing,
        mapsQuery: "The Ancient City",
        description: "World's largest outdoor museum featuring replicas of Thai temples.",
        bookingId: "TICKET-ANC-2024"
      },
      {
        id: "d5-3",
        time: "16:00",
        title: "Grab to Srinakarin",
        location: "Road",
        type: ActivityType.Transport,
        mapsQuery: ""
      },
      {
        id: "d5-4",
        time: "17:30",
        title: "Srinakarin Train Night Market",
        location: "Srinakarin",
        type: ActivityType.Shopping,
        mapsQuery: "Srinakarin Train Night Market",
        description: "Huge vintage market with antique cars, clothes, and street food."
      }
    ]
  },
  {
    id: 6,
    date: "12/8",
    displayDate: "Dec 8",
    weekday: "Sunday",
    title: "Seafood & Spa",
    location: "Thonburi / Bangkok",
    activities: [
      {
        id: "d6-1",
        time: "10:00",
        title: "Thonburi Market Sanam Luang 2",
        location: "Thonburi",
        type: ActivityType.Food,
        mapsQuery: "Thonburi Market Sanam Luang 2",
        description: "Grab car to massive fresh seafood market. Lunch here."
      },
      {
        id: "d6-2",
        time: "14:00",
        title: "Big C Supercenter",
        location: "Ratchadamri",
        type: ActivityType.Shopping,
        mapsQuery: "Big C Supercenter Ratchadamri",
        description: "Buy souvenir snacks (Pocky, Seaweed, Dried Mango)."
      },
      {
        id: "d6-3",
        time: "18:00",
        title: "Bhawa Spa",
        location: "Phloen Chit",
        type: ActivityType.Relax,
        mapsQuery: "Bhawa Spa on the Eight",
        description: "Luxury spa treatment (18:00 - 21:00).",
        bookingId: "SPA-RES-999"
      }
    ]
  }
];
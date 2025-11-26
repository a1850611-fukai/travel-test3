export enum ActivityType {
  Transport = 'Transport',
  Sightseeing = 'Sightseeing',
  Food = 'Food',
  Shopping = 'Shopping',
  Relax = 'Relax',
  Hotel = 'Hotel'
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  location: string;
  description?: string;
  type: ActivityType;
  mapsQuery: string; // For Google Maps link
  bookingId?: string; // For modal details
  imagePrompt?: string; // Fallback image keyword
}

export interface DayItinerary {
  id: number;
  date: string; // "12/3"
  displayDate: string; // "Dec 3"
  weekday: string;
  title: string;
  location: string; // General location for the day (e.g., Bangkok, Ayutthaya)
  activities: Activity[];
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
}
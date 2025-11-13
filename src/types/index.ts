export interface Servant {
  id: string;
  name: string;
  surname: string;
  role: string;
  image: string;
  bio: string;
  nameEn?: string;
  surnameEn?: string;
  roleEn?: string;
  bioEn?: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;  
    telegram?: string;
    youtube?: string;
    tiktok?: string;
    email?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  location?: string;
  titleEn?: string;
  descriptionEn?: string;
  locationEn?: string;
}

export interface Sermon {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  speaker: string;
  date: string;
  thumbnail: string;
}

export interface Record {
  id: string;
  title: string;
  date: string;
  speaker: string;
  description: string;
  videoUrl: string;
  category: string;
}
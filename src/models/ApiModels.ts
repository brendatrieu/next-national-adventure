export interface ApiParams {
  parkCode?: string[];
  stateCode?: string[];
  limit?: number;
  start?: number;
  q?: string[];
}

export interface ParkCardData {
  images: { altText: string; url: string }[];
  parkCode: string;
  fullName: string;
  description: string;
}

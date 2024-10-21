export interface FormattedGame {
  description: string;
  releaseDate: Date;
  score: number;
  slug: string;
  title: string;
  image: string;
}

export interface AboutUsInfo {
  data: Data;
  links: Links;
  meta: AboutUsInfoMeta;
}

export interface Data {
  id: string;
  totalResults: number;
  items: Item[];
  genres: null;
  network: null;
}

export interface Item {
  id: number;
  type: Type;
  typeId: number;
  title: string;
  slug: string;
  premiereYear: number;
  releaseDate: Date;
  rating: Rating;
  seoUrl: null;
  image: Image;
  criticScoreSummary: CriticScoreSummary;
  genres: Genre[];
  numberOfSeasons: number;
  network: null;
  description: string;
  duration: number;
  streamingDates: StreamingDates;
}

export interface CriticScoreSummary {
  url: string;
  max: number;
  score: number;
  reviewCount: number;
  positiveCount: number;
  neutralCount: number;
  negativeCount: number;
  sentiment: Sentiment;
}

export enum Sentiment {
  UniversalAcclaim = "Universal acclaim",
}

export interface Genre {
  id: null;
  name: string;
}

export interface Image {
  id: null;
  filename: string;
  dateCreated: DateCreated;
  alt: null;
  credits: null;
  path: null;
  cropGravity: null;
  crop: null;
  caption: null;
  typeName: null;
  imageUrl: null;
  width: number;
  height: number;
  sType: null;
  bucketType: BucketType;
  bucketPath: string;
  mediaType: null;
  provider: null;
}

export enum BucketType {
  Catalog = "catalog",
}

export interface DateCreated {
  date: null;
  timezone: null;
}

export enum Rating {
  E = "E",
  E10 = "E10+",
  M = "M",
  T = "T",
}

export interface StreamingDates {
  videoClosestPastAvailableDate: null;
  videoClosestFutureAvailableDate: null;
  videoClosestPastExpiryDate: null;
  videoClosestFutureExpiryDate: null;
  videoClosestPastAvailableNetworkId: null;
  videoClosestFutureAvailableNetworkId: null;
  videoClosestPastExpiryNetworkId: null;
  videoClosestFutureExpiryNetworkId: null;
  networkStreamingDates: null;
}

export enum Type {
  GameTitle = "game-title",
}

export interface Links {
  self: First;
  prev: First;
  next: First;
  first: First;
  last: First;
}

export interface First {
  href: null | string;
  meta: FirstMeta | null;
}

export interface FirstMeta {
  pageNum: number;
  count: number;
}

export interface AboutUsInfoMeta {
  componentName: null;
  componentDisplayName: null;
  componentType: null;
}

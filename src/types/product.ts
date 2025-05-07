export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
  category: string;
  discountPercentage?: number;
  createdAt?: string;
} 
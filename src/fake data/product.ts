export interface Product {
  id: string;
  name: string;
  description: string;
  reference: string;
  model: string;
  price: number;
  category: string;
  imageUrl: string;
  createdAt: Date;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  story?: string;
  price: number;
  imageUrl: string;
  stock: number;
}
export type ProductCategory = 'B2B' | 'D2C';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image_url: string;
  features: string[];
  created_at: string;
}
export interface Specification {
  label: string;
  value: string;
  category: string;
  copyable?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  specifications: Specification[];
  categoryId: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}
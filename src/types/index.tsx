export interface TypeProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface AdditionalProps {
  title?: string;
  value?: number;
}

export interface ProductProps {
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  amountProduct: number;
  observations: string;
  additional: AdditionalProps[];
  sumTotalProduct: number;
  client?: string;
}

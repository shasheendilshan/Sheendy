export interface Price {
    amount: string;
    currency: string;
  }
  
  export interface Product {
    id: string;
    SKU: string;
    name: string;
    brandName: string;
    mainImage: string;
    price: Price;
    sizes: string[];
    stockStatus: string;
    colour: string;
    description: string;
  }

  export interface ProductApiResponse {
    result: string; 
    data: Product[]; 
  }
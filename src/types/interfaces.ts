export interface IAuth {
  _id: string;
  number: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  token: string;
  image: {
    _id: string;
    url: string;
    blurhash?: string;
    sizes: any[];
  };
}
export interface IProduct {
  _id: string;
  mainImage?: { url: string; blurhash?: string };
  name: string;
  price: number;
  salePrice?: number;
  inStock: number;
  description?: string;
  discountEnabled: boolean;
  isFavourite: boolean;
  images?: {
    blurhash: string;
    url: string;
    webpUrl: string;
    _id: string;
  }[];

  categoryId: string;
  storeId: string;

  currency?: string;
  rating?: number;
  deliveryTime?: string;

  _amount?: number;
}
/**
 * {
name:string.
price: number,
salePrice: number,
discountEnabled:boolean,
inStock: number,
description: string,
isActive: boolean,
mainImage: {url:string},
images: [{url:string},]
}
 */
export interface IStore {
  _id: string;
  number: string;
  itemPrepTimeFrom: number;
  itemPrepTimeTo: number;
  createdAt: string;
  name: string;
  username: string;
  addressName: string;
  description: string; // "<p>something</p>"
  imageId: string;
  phoneNumber: string;
  updatedAt: string;
  workTime: string;
  rate?: number;
  totalRate?: number;
  totalRateComment?: number;
  deliveryPrice: number;
  deliveryPriceAmount: number;
  deliveryPriceType: "amount";
  url: string;
  addressLocation: {
    name?: string;
  };
  employeeId: string;
  image: {
    _id: string;
    url: string;
    blurhash?: string;
    sizes: {
      url: string;
      width: number;
      height: number;
    }[];
  };
  employee: {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  employeePhoneNumber: string;
}

export interface ICategory {
  _id: string;
  number: string;
  createdAt: string;
  name: string;
  type: string;
}

export interface IOrder {
  _id: string;
  number: string;
  createdAt: string;
  storeId: string;
  customerId: string;
  receiverCustomerId: string;
  stateId: string;
  itemPrice: number;
  totalPrice: number;
  addressName: string;
  addressLocation: {
    longitude: number;
    latitude: number;
  };
  paymentType: "cash" | "card";
  cardId: string;
  bitoRetry: number;
  bitoLastSync: string;
  taxiLastSync: string;
  state: {
    _id: string;
    state: string;
    color: string;
    name: string;
  };
  customer: {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  receiverCustomer: {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  items: {
    _id: string;
    productId: string;
    price: number;
    amount: number;
    product: {
      _id: string;
      name: string;
      bitoId: string;
      mainImage: {
        _id: string;
        url: string;
        sizes: [
          {
            url: string;
            width: number;
            height: number;
          }
        ];
      };
    };
  }[];
}

export interface IStoreMenu {
  categories: {
    _id: string;
    name: string;
    url: string;
  }[];
  products: IProduct[];
}

export interface IStoreProducts {
  _id: string;
  name: string;
  url: string;
  products: IProduct[];
}

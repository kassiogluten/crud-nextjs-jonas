export interface MockData {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

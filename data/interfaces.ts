export interface IListing {
  id: number;
  name: string;
  category_id: number;
  price: number;
  locality: string;
  description: string;
  watch_count: number;
}
export type UserInfo={
  id: number;
  user_name: string;
  password: string;
  phone_number: number;
  email_adress: string;
}
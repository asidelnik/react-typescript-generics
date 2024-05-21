export interface IDatabase {
  [key: string]: string | number;
  id: number;
  name: string;
  url: string;
  username: string;
  password: string;
  type: string;
}

export interface IUSER {
  "email":string;
  "password":string;
}

export interface IClient{
  "_id"?:string;
  "email"?:string;
  "isActive"?:boolean;
  "pass"?:string
}
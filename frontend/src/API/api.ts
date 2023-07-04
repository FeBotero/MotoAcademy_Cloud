import axios from "axios";
import { IClient, IUSER } from "../types/Types";

const api = axios.create({
  baseURL:"http://localhost:3000",
  headers:{
    "Content-Type":"application/json"
  }
})

export const apiService ={
  user:{
    readAllURL:function(){
      return api.get<IUSER>("/user")
  },
  readByIdURL:function(id:any){
      return api.get<IUSER>("/user/"+id)
  },
  readByIdUpdateURL:function(id:any){
      return api.get<IUSER>("/user/update/"+id)
  },
  createURL:function(body:IUSER){
      return api.post<IUSER>("/user",body)
  },
  
  updateURL:function(id:any,body:IUSER){
      return api.put<any>("/user/"+id,body)
  },
  deleteURL:function(id:any){
      return api.delete<any>("/user/"+id)
  },
  conectUrl: function (body:IUSER) {
      return api.post("/user/login",body)
    },
  },
  client:{
    readAllURL:function(){
      return api.get<IClient>("/client")
  },
  readByIdURL:function(id:any){
      return api.get<IClient>("/client/"+id)
  },
  readByIdUpdateURL:function(id:any){
      return api.get<IClient>("/client/update/"+id)
  },
  createURL:function(body:IClient){
      return api.post<IClient>("/client",body)
  },
  
  updateURL:function(id:any,body:IClient){
      return api.put<any>("/client/"+id,body)
  },
  deleteURL:function(id:any){
      return api.delete<any>("/client/"+id)
  },
  conectUrl: function (body:IClient) {
      return api.post("/client/login",body)
    },
  }
}
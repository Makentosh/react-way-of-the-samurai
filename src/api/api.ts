import axios from 'axios';
import {usersType} from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '822b1fda-a66f-4307-a05f-ffa17e2c3670'
  }
});

export type GetItemsType = {
  items: Array<usersType>
  totalCount: number
  error: string | null
}



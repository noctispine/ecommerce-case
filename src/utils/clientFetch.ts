import axios from "axios";
import {baseURL} from "../constants";

export const client = axios.create({
    baseURL: baseURL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
import axios from "axios";
import {BASE_URL,TIMEOUT} from './config'
class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    });
  }
}
export default new Request()
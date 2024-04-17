import axios from "axios";

const COUNTRY_LIST_URL = `https://restcountries.com/v3.1/all`;

export class CountryService {
  static getAll() {
    return axios.get(COUNTRY_LIST_URL);
  }
}

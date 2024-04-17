import axios from "axios";

const COUNTRY_LIST_URL = `https://restcountries.com/v3.1`;

export class CountryService {
  static getAll() {
    return axios.get(COUNTRY_LIST_URL + `/all`);
  }
  static searchByName(countryName: string) {
    return axios.get(COUNTRY_LIST_URL + `/name/${countryName}`);
  }
}

import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";
import { CountryService } from "../services/ContryService";
import { SearchCard } from "./SearchCard";

export const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadCountries = async () => {
    await CountryService.getAll().then((res) => {
      //   console.log("res: ", res.data);
      console.log("updating countries");
      setCountries(res.data);
    });
    // console.log("countries: ", countries);
  };

  const updateFilteredCountries = () => {
    const filteredCountries = countries.filter((country: any) => {
      console.log(
        searchText,
        country?.name?.common,
        country?.name?.common?.indexOf(searchText)
      );

      return (
        country?.name?.common
          ?.toLowerCase()
          ?.indexOf(searchText.toLowerCase()) > -1
      );
    });
    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
    console.log("countries changed: ", countries);
    const regionMap: any = {};

    countries.forEach((country: any) => {
      regionMap[`${country?.region}`] = [country];
    });
    console.log(regionMap);
    setRegions(Object.keys(regionMap));
  }, [countries]);

  useEffect(() => {
    updateFilteredCountries();
  }, [searchText]);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 ml-20">
        <SearchCard setSearchText={setSearchText} regions={regions}></SearchCard>
      </div>
      <div className="grid grid-cols-4 gap-4 ml-20">
        {searchText.trim().length > 0
          ? filteredCountries.map((country: any, index: number) => {
              return <CountryCard key={index} country={country}></CountryCard>;
            })
          : countries.map((country: any, index: number) => {
              return <CountryCard key={index} country={country}></CountryCard>;
            })}
      </div>
    </>
  );
};

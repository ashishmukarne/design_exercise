import { useContext, useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";
import { CountryService } from "../services/ContryService";
import SearchCard from "./SearchCard";
import { ThemeContext } from "../themeContext";

export const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { theme } = useContext(ThemeContext) || { theme: "light" };

  const loadCountries = async () => {
    await CountryService.getAll().then((res) => {
      setCountries(res.data);
    });
  };

  const updateFilteredCountries = () => {
    const isSearchingForRegion = selectedRegion.trim().length > 0;
    const isSearchingForText = searchText.trim().length > 0;

    const filteredCountries = countries.filter((country: any) => {
      if (isSearchingForRegion && isSearchingForText) {
        return (
          country?.region?.toLowerCase() == selectedRegion?.toLowerCase() &&
          country?.name?.common
            ?.toLowerCase()
            ?.indexOf(searchText.toLowerCase()) > -1
        );
      } else if (isSearchingForRegion && !isSearchingForText) {
        return country?.region.toLowerCase() == selectedRegion?.toLowerCase();
      } else {
        return (
          country?.name?.common
            ?.toLowerCase()
            ?.indexOf(searchText.toLowerCase()) > -1
        );
      }
    });
    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
    const regionMap: any = {};
    countries.forEach((country: any) => {
      regionMap[`${country?.region}`] = [country];
    });
    setRegions(Object.keys(regionMap));
  }, [countries]);

  useEffect(() => {
    updateFilteredCountries();
  }, [searchText]);

  useEffect(() => {
    updateFilteredCountries();
  }, [selectedRegion]);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-4 gap-4 pl-20 pb-10 pt-10 ${theme}-light-bg shadow-md`}
      >
        <SearchCard
          setSearchText={setSearchText}
          setSelectedRegion={setSelectedRegion}
          regions={regions}
        ></SearchCard>
      </div>
      <div
        className={`grid md:grid-cols-4 sm:grid-cols-1 gap-4 pl-20 ${theme}-bg h-screen`}
      >
        {searchText.trim().length > 0 || selectedRegion.trim().length > 0
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

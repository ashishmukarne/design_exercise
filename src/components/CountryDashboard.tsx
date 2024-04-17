import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";
import { CountryService } from "../services/ContryService";

export const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);

  const loadCountries = async () => {
    await CountryService.getAll().then((res) => {
      //   console.log("res: ", res.data);
      console.log("updating countries");
      setCountries(res.data);
    });
    // console.log("countries: ", countries);
  };

  useEffect(() => {
    console.log("countries changed: ", countries);
  }, [countries]);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country: any, index: number) => {
          return <CountryCard key={index} country={country}></CountryCard>;
        })}
      </div>
    </>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { CountryService } from "../services/ContryService";
import { LeftArrowIcon } from "../icons/icons";
import { Link, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../themeContext";

export const CountryDetailCard = () => {
  const [countryDetails, setCountryDetails] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext) || { theme: "light" };
  
  const loadCountryDetails = async () => {
    const country: string = `${searchParams.get(`country`)}`;
    CountryService.searchByName(country).then((res) => {
      setCountryDetails(res.data[0]);
    });
  };

  useEffect(() => {
    loadCountryDetails();
  }, []);

  const getCurrency = (currencies: any) => {
    // countryDetails?.currencies
    const keys = Object.keys(currencies);
    return keys.length > 0 ? keys[0] : "";
  };
  return (
    <>
      <div className={`"grid grid-cols-12 gap-4 pl-20 pb-10 pt-10 ${theme}-bg`}>
        <div className="col-span-1">
          <Link to={`/`}>
            <button className={`drop-shadow-xl pl-8 pr-8 pt-3 pb-3 ${theme}-light-bg flex ${theme}-text`}>
              <LeftArrowIcon /> &nbsp; Back
            </button>
          </Link>
        </div>
      </div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-3 gap-4 pl-20 pb-10 pt-10 ${theme}-bg h-screen ${theme}-text`}>
        <div className="col-span-1 sm:w-5/6">
          <img
            className="display:flex h-96"
            src={`${countryDetails?.flags?.png}`}
          ></img>
        </div>
        <div className="col-span-1 pt-20">
          <div className="pl-4">
            <div className="font-nunito-sans">
              <span className="font-extrabold country-title">
                {countryDetails?.name?.common}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 pt-7">
                <div className="font-nunito-sans font-weight-600">
                  Native Name:{" "}
                  <span className="font-weight-300">
                    {countryDetails?.name?.nativeName?.eng?.common}
                  </span>
                </div>

                <div className="font-nunito-sans font-weight-600">
                  Population:{" "}
                  <span className="font-weight-300">
                    {countryDetails?.population}
                  </span>
                </div>

                <div className="font-nunito-sans font-weight-600">
                  Region:{" "}
                  <span className="font-weight-300">
                    {countryDetails?.region}
                  </span>
                </div>
                <div className="font-nunito-sans font-weight-600">
                  Sub Region:{" "}
                  <span className="font-weight-300">
                    {countryDetails?.subregion}
                  </span>
                </div>

                <div className="font-nunito-sans font-weight-600">
                  Capital:{" "}
                  <span className="font-weight-300">
                    {countryDetails?.capital}
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div className="font-nunito-sans font-weight-600">
                  Top Level Domain:{" "}
                  <span className="font-weight-300">N.A.</span>
                </div>
                <div className="font-nunito-sans font-weight-600">
                  Currencies:{" "}
                  <span className="font-weight-300 capitalize">
                    {countryDetails && getCurrency(countryDetails?.currencies)}
                  </span>
                </div>
                <div className="font-nunito-sans font-weight-600">
                  Languages:{" "}
                  <span className="font-weight-300 capitalize">
                    {countryDetails &&
                      Object.values(countryDetails?.languages).map(
                        (item) => `${item},`
                      )}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 pt-20">
                <div className="font-nunito-sans font-weight-600 inline-block align-middle">
                  Border Countries:{" "}
                  <span className="font-weight-300 capitalize ml-10">
                    {countryDetails &&
                      countryDetails.borders?.map(
                        (item: string, index: number) => {
                          return (
                            <button
                              key={index}
                              className={`shadow-md pl-6 pr-6 pt-1 pb-1 ${theme}-light-bg mr-4`}
                            >
                              {item}
                            </button>
                          );
                        }
                      )}
                  </span>
                </div>
              </div>
            </div>
            {/* borders */}
          </div>
        </div>
      </div>
    </>
  );
};

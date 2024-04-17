import React, { useEffect, useState } from "react";
import { CountryService } from "../services/ContryService";
import { LeftArrowIcon } from "../icons/arrow";
import { Link, useSearchParams } from "react-router-dom";

export const CountryDetailCard = () => {
  const [countryDetails, setCountryDetails] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const loadCountryDetails = async () => {
    const country = searchParams.get(`country`)
    CountryService.searchByName(country).then((res) => {
      console.log(res.data[0]);
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
      <div className="grid grid-cols-12 gap-4 ml-20 mb-10 mt-10 ">
        <div className="col-span-1">
          <Link to={`/`}>
            <button className="drop-shadow-xl pl-8 pr-8 pt-3 pb-3 light-bg flex">
              <LeftArrowIcon /> &nbsp; Back
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ml-20 mb-10 mt-10 light-bg h-screen">
        <div className="col-span-1">
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
                      countryDetails.borders?.map((item:string, index:number) => {
                        return (
                          <button key={index} className="shadow-md pl-6 pr-6 pt-1 pb-1 light-bg mr-4">
                            {item}
                          </button>
                        );
                      })}
                  </span>
                </div>
              </div>
            </div>
            {/* borders */}
          </div>
        </div>
      </div>
      <div className="col-span-1 light-card-bg shadow-lg mb-10">
        <div className="divide-x"></div>
      </div>
    </>
  );
};

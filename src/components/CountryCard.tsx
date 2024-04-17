import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../themeContext";

type CountryCardProps = {
  country: {
    flags: {
      png: string;
      alt: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
  };
};

export const CountryCard = (props: CountryCardProps) => {
  const { theme } = useContext(ThemeContext) || { theme: "light" }; // Default to light theme

  return (
    <Link to={`/detail?country=${props.country.name.common}`}>
      <div
        className={`col-span-1 light-card-bg shadow-lg mb-10 w-96 ${theme}-light-bg ${theme}-text`}
      >
        <div className="divide-x">
          <img
            className="object-cover h-48 w-96"
            src={`${props?.country?.flags?.png}`}
            alt={`${props?.country?.flags?.alt}`}
          ></img>
          <div className={` pl-4 pt-4 ${theme}-light-bg border-width pb-10`}>
            <div className={`font-nunito-sans font-weight-600`}>
              Name:{" "}
              <span className="font-weight-300">
                {props?.country?.name?.common}
              </span>
            </div>
            <div className="font-nunito-sans font-weight-600">
              Population:{" "}
              <span className="font-weight-300">
                {props?.country?.population}
              </span>
            </div>
            <div className="font-nunito-sans font-weight-600">
              Region:{" "}
              <span className="font-weight-300">{props?.country?.region}</span>
            </div>
            <div className="font-nunito-sans font-weight-600">
              Capital:{" "}
              <span className="font-weight-300">{props?.country?.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

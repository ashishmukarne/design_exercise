import React from "react";

export const CountryCard = (props: any) => {
  return (
    <div className="col-span-1">
      <div className="divide-x">
        {/* <div>{props?.country?.flags?.png}</div> */}
        <img
          className="display:flex"
          src={`${props?.country?.flags?.png}`}
        ></img>
        <div className="p-1">
          <div>Name={props?.country?.name?.common}</div>
          <div>Population={props?.country?.population}</div>
          <div>Region={props?.country?.region}</div>
        </div>
      </div>
    </div>
  );
};
import React from "react";

export const SearchCard = (props: any) => {
  return (
    <>
      <div className="col-span-1 grid-col-end-1">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            onChange={(event) => {
              props?.setSearchText(event.currentTarget.value);
            }}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="col-span-1 grid-col-end-1">
        <select>
          {props?.regions.map((item: string, index: number) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </>
  );
};

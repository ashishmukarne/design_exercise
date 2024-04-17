import React from "react";

type SearchCardProps = {
  setSearchText: (arg0: string) => {};
  setSelectedRegion: (arg0: string) => {};
  regions: string[];
};

const SearchCard = (props: SearchCardProps) => {
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
              props?.setSearchText(
                `${event.currentTarget.value}`.toLowerCase()
              );
            }}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for a country..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="col-span-2"></div>
      
      <div className="col-span-1 pr-20 pl-14">
        <form className="max-w-sm mx-auto">
           
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              props?.setSelectedRegion(
                `${event.currentTarget.value}`.toLowerCase()
              );
            }}
          >
            <option value={""} selected>
              Choose a country
            </option>
            {props?.regions.map((item: string, index: number) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      
    </>
  );
};

export default SearchCard;

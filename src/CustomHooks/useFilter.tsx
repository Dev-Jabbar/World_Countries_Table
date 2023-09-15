"use client";

import { CountryContext } from "@/context/CountryContext";
import { useContext, useEffect } from "react";
import useCountryFetch from "./useCountryFetch";
import MyTable from "@/component/MyTable";

interface Country {
  id: string;
  code: string;
  name: string;
  nameUn: string;
  continent: string;
  hasStates: boolean;
}

const useFilter = () => {
  const {
    countries,
    setFilteredCountries,

    hasStatesFilter,
    setHasStatesFilter,
    continentFilter,
    setContinentFilter,
  } = useCountryFetch();

  useEffect(() => {
    // Apply filters
    let filteredData = [...countries];

    if (continentFilter !== "") {
      filteredData = filteredData.filter(
        (country) => country.continent === continentFilter
      );
    }

    if (hasStatesFilter !== "") {
      const hasStatesValue = hasStatesFilter === "true";
      filteredData = filteredData.filter(
        (country) => country.hasStates === hasStatesValue
      );
    }

    setFilteredCountries(filteredData);
  }, [continentFilter, hasStatesFilter]);
  return {
    hasStatesFilter,
    setHasStatesFilter,

    continentFilter,
    setContinentFilter,
  };
};

export default useFilter;

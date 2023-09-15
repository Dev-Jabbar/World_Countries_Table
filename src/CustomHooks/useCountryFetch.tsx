"use client";

import { CountryContext } from "@/context/CountryContext";
import { useContext, useEffect, useState } from "react";
interface Country {
  id: string;
  code: string;
  name: string;
  nameUn: string;
  continent: string;
  hasStates: boolean;
}

interface CountryContextValue {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  filteredCountries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hasStatesFilter: string;
  setHasStatesFilter: React.Dispatch<React.SetStateAction<string>>;
  continentFilter: string;
  setContinentFilter: React.Dispatch<React.SetStateAction<string>>;
  sortedColumn: keyof Country | undefined;
  setSortedColumn: React.Dispatch<
    React.SetStateAction<keyof Country | undefined>
  >;
  sortDirection: "asc" | "desc" | undefined;
  setSortDirection: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | undefined>
  >;
}

const useCountryFetch = () => {
  const {
    countries,
    setCountries,
    loading,
    setLoading,
    hasStatesFilter,
    setHasStatesFilter,
    filteredCountries,
    setFilteredCountries,
    continentFilter,
    setContinentFilter,
    sortedColumn,
    setSortedColumn,
    sortDirection,
    setSortDirection,
  } = useContext(CountryContext) as CountryContextValue;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/countries");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: { countries: Country[] } = await response.json();

        setCountries(data.countries);
        setFilteredCountries(data.countries);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      }
    }

    fetchData();
  }, []);

  return {
    hasStatesFilter,
    setHasStatesFilter,
    loading,
    filteredCountries,
    setFilteredCountries,
    countries,
    continentFilter,
    setContinentFilter,
    sortedColumn,
    setSortedColumn,
    sortDirection,
    setSortDirection,
  };
};

export default useCountryFetch;

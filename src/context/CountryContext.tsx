"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";

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

interface CountryContextProviderProps {
  children: ReactNode;
}

const CountryContext = createContext<CountryContextValue | undefined>(
  undefined
);

const CountryContextProvider: React.FC<CountryContextProviderProps> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasStatesFilter, setHasStatesFilter] = useState<string>("");

  const [continentFilter, setContinentFilter] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const [sortedColumn, setSortedColumn] = useState<keyof Country | undefined>(
    undefined
  );
  const [sortDirection, setSortDirection] = useState<
    "asc" | "desc" | undefined
  >(undefined);

  return (
    <CountryContext.Provider
      value={{
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
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryContextProvider };

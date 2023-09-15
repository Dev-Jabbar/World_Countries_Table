"use client";

import useCountryFetch from "./useCountryFetch";

const useSorting = () => {
  const {
    filteredCountries,
    continentFilter,
    setContinentFilter,
    sortedColumn,
    setSortedColumn,
    sortDirection,
    setSortDirection,
  } = useCountryFetch();

  const handleSortClick = () => {
    if (sortedColumn === "nameUn") {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn("nameUn");
      setSortDirection("asc");
    }
  };

  const sortedCountries = filteredCountries.sort((a, b) => {
    if (sortedColumn === "nameUn") {
      return sortDirection === "asc"
        ? a.nameUn.localeCompare(b.nameUn)
        : b.nameUn.localeCompare(a.nameUn);
    }

    return 0;
  });

  return {
    filteredCountries,
    continentFilter,
    setContinentFilter,
    sortedColumn,
    setSortedColumn,
    sortDirection,
    setSortDirection,
    sortedCountries,
    handleSortClick,
  };
};

export default useSorting;

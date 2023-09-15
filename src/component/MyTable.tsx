"use client";
import React, { useContext } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

interface Country {
  id: string;
  code: string;
  name: string;
  nameUn: string;
  continent: string;
  hasStates: boolean;
}

interface CountryContextValue {
  loading: boolean;
  filteredCountries: Country[];
}

import { CountryContext } from "@/context/CountryContext";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import useSorting from "@/CustomHooks/useSorting";
interface CountryContextValue {}
const MyTable = () => {
  const { filteredCountries, loading } = useContext(
    CountryContext
  ) as CountryContextValue;

  const {
    sortedColumn,

    sortDirection,

    handleSortClick,
  } = useSorting();

  return (
    <div>
      <div>
        {loading ? (
          <div> Loading...</div>
        ) : (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>id </TableCell>
                  <TableCell align="right">Code</TableCell>
                  <TableCell align="right">name </TableCell>
                  <TableCell align="right">
                    nameUn{" "}
                    <IconButton onClick={handleSortClick}>
                      {sortedColumn === "nameUn" && sortDirection === "asc" ? (
                        <ArrowDropDown />
                      ) : (
                        <ArrowDropUp />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">continent</TableCell>
                  <TableCell align="right">hasStates</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCountries.map((country) => (
                  <TableRow
                    key={country.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {country.id}
                    </TableCell>
                    <TableCell align="right">{country.code}</TableCell>
                    <TableCell align="right">{country.name}</TableCell>
                    <TableCell align="right">{country.nameUn}</TableCell>
                    <TableCell align="right">{country.continent}</TableCell>
                    <TableCell align="right">
                      {country.hasStates ? "YES" : "NO"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default MyTable;

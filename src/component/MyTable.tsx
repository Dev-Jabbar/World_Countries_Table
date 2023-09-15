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
  Skeleton,
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
  const skeletonArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
  ];

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>id </TableCell>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">name </TableCell>
                <TableCell align="center">
                  nameUn{" "}
                  <IconButton onClick={handleSortClick}>
                    {sortedColumn === "nameUn" && sortDirection === "asc" ? (
                      <ArrowDropDown />
                    ) : (
                      <ArrowDropUp />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell align="center">continent</TableCell>
                <TableCell align="center">hasStates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading
                ? skeletonArray.map((skeleton) => (
                    <TableRow
                      key={skeleton.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={80}
                          height={20}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={100}
                          height={20}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={140}
                          height={20}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={140}
                          height={20}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={120}
                          height={20}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          width={50}
                          height={20}
                        />
                      </TableCell>
                    </TableRow>
                  ))
                : filteredCountries.map((country) => (
                    <TableRow
                      key={country.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {country.id}
                      </TableCell>
                      <TableCell align="center">{country.code}</TableCell>
                      <TableCell align="center">{country.name}</TableCell>
                      <TableCell align="center">{country.nameUn}</TableCell>
                      <TableCell align="center">{country.continent}</TableCell>
                      <TableCell align="center">
                        {country.hasStates ? "YES" : "NO"}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyTable;

"use client";

import useFilter from "@/CustomHooks/useFilter";

import MyTable from "@/component/MyTable";

type Props = {};
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function Homepage({}: Props) {
  const {
    hasStatesFilter,
    setHasStatesFilter,

    continentFilter,
    setContinentFilter,
  } = useFilter();

  return (
    <div className="p-20">
      <h1 className=" text-5xl text-center pb-10  font-extrabold ">
        World Countries Table
      </h1>

      <div className="text-lg font-semibold mb-12 items-center flex  gap-4">
        <span>Filters</span>
        <span className="text-sm font-normal">
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              hasStates
            </InputLabel>
            <Select
              value={hasStatesFilter}
              onChange={(e) => setHasStatesFilter(e.target.value as string)}
              autoWidth
              label="hasStates"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </Select>
          </FormControl>
        </span>
        <span>
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Continent
            </InputLabel>
            <Select
              value={continentFilter}
              onChange={(e) => setContinentFilter(e.target.value as string)}
              autoWidth
              label="Continent"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="AS">Asia</MenuItem>
              <MenuItem value="EU">Europe</MenuItem>
              <MenuItem value="AF">Africa</MenuItem>
              <MenuItem value="NA">North America</MenuItem>
              <MenuItem value="SA">South America</MenuItem>
              <MenuItem value="OC">Oceanic</MenuItem>
              <MenuItem value="AN">Antarctica</MenuItem>
            </Select>
          </FormControl>
        </span>
      </div>

      <MyTable />
    </div>
  );
}

export default Homepage;

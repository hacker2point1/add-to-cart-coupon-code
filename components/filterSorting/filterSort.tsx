"use client";

import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

interface Props {
  sort: string;
  setSort: (val: string) => void;
}

export default function FilterSort({ sort, setSort }: Props) {
  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sort}
          label="Sort By"
          onChange={(e) => setSort(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SortIcon fontSize="small" />
            </InputAdornment>
          }
          sx={{
            borderRadius: "30px",
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            },
            "&.Mui-focused": {
              backgroundColor: "#fff",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
            },
          }}
        >
          <MenuItem value="asc">Price Low → High</MenuItem>
          <MenuItem value="desc">Price High → Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
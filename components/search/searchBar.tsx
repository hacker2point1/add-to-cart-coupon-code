"use client";

import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        placeholder="Search groceries..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
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
          },
        }}
      />
    </Box>
  );
}
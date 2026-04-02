"use client";

import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

interface Props {
  category: string;
  setCategory: (val: string) => void;
  categories: string[];
}

export default function FilterCategory({
  category,
  setCategory,
  categories,
}: Props) {
  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <CategoryIcon fontSize="small" />
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
          <MenuItem value="all">All</MenuItem>

          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
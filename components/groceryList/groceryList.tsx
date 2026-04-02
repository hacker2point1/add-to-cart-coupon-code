

"use client"
import { Product } from "@/types/grocery";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  products?: Product[];
  addToCart?: (product: Product) => void;
}

export default function GroceryList({
  products = [],
  addToCart = () => {},
}: Props) {
  return (
    <Stack spacing={2}>
      {products.map((p) => (
        <Card
          key={p.id}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: 6,
              transform: "translateY(-4px) scale(1.01)",
            },
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Product Info */}
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {p.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  fontWeight="medium"
                >
                  ₹{p.price}
                </Typography>
              </Box>

              {/* Add Button */}
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                onClick={() => addToCart(p)}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 2,
                  py: 1,
                  boxShadow: 2,
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                Add
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
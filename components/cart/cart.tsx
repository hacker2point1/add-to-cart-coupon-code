
"use client";

import { CartItem } from "@/types/grocery";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface Props {
  cart: CartItem[];
  updateQty: (id: number, delta: number) => void;
}

export default function Cart({ cart, updateQty }: Props) {
  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Empty Cart
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add some items to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      {cart.map((item) => (
        <Card
          key={item.id}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": {
              boxShadow: 6,
              transform: "translateY(-2px)",
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
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{item.price} each
                </Typography>
              </Box>

              {/* Quantity Controls */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  color="error"
                  onClick={() => updateQty(item.id, -1)}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>

                <Typography variant="body1" fontWeight="medium">
                  {item.quantity}
                </Typography>

                <IconButton
                  color="primary"
                  onClick={() => updateQty(item.id, 1)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Stack>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Total Price */}
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              textAlign="right"
            >
              Total: ₹{item.price * item.quantity}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
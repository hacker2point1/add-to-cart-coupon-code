

// "use client"
// import { Button, Typography } from "@mui/material";

// interface Props {
//   applyCoupon: () => void; // function to apply the coupon
//   isApplied: boolean;      // flag to show if coupon is already applied
// }

// export default function Coupon({ applyCoupon, isApplied }: Props) {
//   return (
//     <div style={{ margin: "10px 0" }}>
//       <Typography variant="subtitle1">
//         {isApplied ? "Coupon Applied! 20% off" : "Use promo code SAVE20 for 20% off"}
//       </Typography>
//       {!isApplied && (
//         <Button variant="contained" color="primary" onClick={applyCoupon}>
//           Use Code
//         </Button>
//       )}
//     </div>
//   );
// }


"use client";

import {
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  applyCoupon: () => void; // function to apply the coupon
  isApplied: boolean; // flag to show if coupon is already applied
}

export default function Coupon({ applyCoupon, isApplied }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        mt: 2,
        background: isApplied
          ? "linear-gradient(135deg, #e8f5e9, #ffffff)"
          : "linear-gradient(135deg, #f5f5f5, #ffffff)",
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Icon */}
          <Box color={isApplied ? "green" : "primary.main"}>
            {isApplied ? <CheckCircleIcon /> : <LocalOfferIcon />}
          </Box>

          {/* Text */}
          <Box flex={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              {isApplied
                ? "Coupon Applied! 🎉"
                : "Use promo code SAVE20"}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {isApplied
                ? "You saved 20% on your order"
                : "Get 20% off instantly on checkout"}
            </Typography>
          </Box>

          {/* Button */}
          {!isApplied && (
            <Button
              variant="contained"
              onClick={applyCoupon}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                px: 2,
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 4,
                },
              }}
            >
              Apply
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
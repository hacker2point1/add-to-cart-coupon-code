"use client";
import { useState } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { CartItem, Product } from "@/types/grocery";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { products } from "@/data/product";
import { calculateTotal } from "@/utils/pricing/pricing";
import {
  applyDiscount,
  applyCoupon as applyCouponUtil,
} from "@/utils/discount/discount";
import SearchBar from "@/components/search/searchBar";
import FilterSort from "@/components/filterSorting/filterSort";
// import FilterCategory from "@/components/filterSorting/filterCategory"; 
import Cart from "@/components/cart/cart";
import GroceryList from "@/components/groceryList/groceryList";
import Coupon from "@/components/cupon/cupon";
import FilterCategory from "@/components/categoryWiseFilter/categoryWiseFilter";

export default function App() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [category, setCategory] = useState("all"); //category wise filter handle state
  const [history, setHistory] = useState<CartItem[][]>([]);
  const [couponApplied, setCouponApplied] = useState(false);

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  //save the history to undo
  const saveHistory = () => setHistory((prev) => [...prev, cart]);

  //add to cart
  const addToCart = (product: Product) => {
    saveHistory();

    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  //update quantity
  const updateQty = (id: number, delta: number) => {
    saveHistory();

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //undo function
  const undo = () => {
    const last = history.pop();
    if (last) setCart(last);
  };

  //apply coupon
  const handleApplyCoupon = () => {
    setCouponApplied(true);
  };

  // filtering + sorting 
  const filtered = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    )
    .sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

  // Calculate total
  let total = calculateTotal(cart);
  total = applyDiscount(total);
  if (couponApplied) {
    total = applyCouponUtil(total, "SAVE20");
  }

  return (
    <Container maxWidth={false} sx={{ py: 3, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        GROW-MART
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          alignItems: "start",
        }}
      >
        <Box>
          <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
              <SearchBar search={search} setSearch={setSearch} />
              <FilterCategory
                category={category}
                setCategory={setCategory}
                categories={categories}
              />
              <FilterSort sort={sort} setSort={setSort} />
            </Box>
          </Paper>

          <Paper sx={{ p: 2 }} elevation={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Products
            </Typography>
            <GroceryList products={filtered} addToCart={addToCart} />
          </Paper>
        </Box>

        <Box>
          <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Cart
            </Typography>
            <Cart cart={cart} updateQty={updateQty} />
          </Paper>

          <Paper sx={{ p: 2 }} elevation={2}>
            <Coupon applyCoupon={handleApplyCoupon} isApplied={couponApplied} />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Total: ₹{total.toFixed(2)}
            </Typography>

            <Button variant="contained" sx={{ mt: 2 }} onClick={undo} fullWidth>
              Undo
            </Button>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
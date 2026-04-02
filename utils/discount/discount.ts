export const applyDiscount = (total: number) => {
  if (total > 500) return total * 0.9; // 10% discount
  return total;
};

export const applyCoupon = (total: number, code: string) => {
  if (code === "SAVE20") return total * 0.8;
  return total;
};
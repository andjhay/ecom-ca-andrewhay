import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  clearCart: () => set({ cart: [] }),
}));

function useCart() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  function addToCartOnClick(id) {
    addToCart(id);
  }

  return { cart, addToCartOnClick, clearCart };
}

export default useCart;

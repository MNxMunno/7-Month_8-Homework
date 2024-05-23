import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (item) =>
    set((state) => {
      const index = state.carts.findIndex((i) => i.id === item.id);
      let newCart;
      if (index < 0) {
        newCart = [...state.carts, { ...item, quantity: 1 }];
      } else {
        newCart = state.carts.map((cartItem, inx) =>
          inx === index
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        // toast.success("zur");
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { carts: newCart };
    }),
  removeFromCart: (itemId) =>
    set((state) => {
      const newCart = state.carts.filter((i) => i.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { carts: newCart };
    }),
  decrementCart: (item) =>
    set((state) => {
      const index = state.carts.findIndex((i) => i.id === item.id);
      let newCart = state.carts.map((cartItem, inx) =>
        inx === index
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      newCart = newCart.filter((cartItem) => cartItem.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { carts: newCart };
    }),
}));

export default useCartStore;

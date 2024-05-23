import { toast } from "react-toastify";
import { create } from "zustand";

const useStore = create((set) => ({
  bears: JSON.parse(localStorage.getItem("wishlist")) || [],
  toggleWishlistItem: (item) => {
    set((state) => {
      const index = state.bears.findIndex((i) => i.id === item.id);

      let updatedBears;
      if (index !== -1) {
        updatedBears = state.bears.filter((i) => i.id !== item.id);
        toast.error("Ajjoyib!");
      } else {
        updatedBears = [...state.bears, item];
        toast.success("okey");
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedBears));

      return { bears: updatedBears };
    });
  },
}));

export default useStore;

import { toast } from "react-toastify";
import { create } from "zustand";

const useStore = create((set) => ({
  bear: JSON.parse(localStorage.getItem("wishlist")) || [],
  toggleWishlistItem: (item) => {
    set((state) => {
      const index = state.bear.findIndex((i) => i.id === item.id);

      let updatedBears;
      if (index !== -1) {
        updatedBears = state.bear.filter((i) => i.id !== item.id);
      } else {
        updatedBears = [...state.bear, item];
        toast.success("okey");
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedBears));

      return { bear: updatedBears };
    });
  },
}));

export default useStore;

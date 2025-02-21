import { create } from "zustand";
import { persist } from "zustand/middleware";

const useApplyStore = create(
  persist(
    (set, get) => ({
      agree: "",
      name: "",
      email: "",
      phone: "",
      part: "",

      setAgree: (agree) => {
        set({ agree });
      },
      setProfile: (profile) => set((state) => ({ ...state, ...profile })),
      setPart: (part) => set({ part }),
      resetForm: () =>
        set({
          agree: "",
          name: "",
          email: "",
          phone: "",
          part: "",
        }),
    }),
    {
      name: "apply-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useApplyStore;

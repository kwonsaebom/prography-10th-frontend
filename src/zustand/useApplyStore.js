import { create } from "zustand";

const useApplyStore = create((set) => ({
  agree: "",
  name: "",
  email: "",
  phone: "",
  part: "",

  setAgree: (agree) => set({ agree }),
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
}));

export default useApplyStore;

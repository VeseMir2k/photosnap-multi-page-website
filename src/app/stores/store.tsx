import { create } from "zustand"

interface StoreState {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

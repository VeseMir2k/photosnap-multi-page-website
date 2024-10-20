import { create } from "zustand"

interface StoreState {
  isMenuOpen: boolean
  closeMenu: () => void
  toggleMenu: () => void
}

export const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  closeMenu: () => set((state) => ({ isMenuOpen: (state.isMenuOpen = false) })),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

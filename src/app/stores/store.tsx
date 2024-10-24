import { create } from "zustand"

interface StoreState {
  isMenuOpen: boolean
  plan: "monthly" | "yearly"
  closeMenu: () => void
  toggleMenu: () => void
  togglePlan: () => void
}

export const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  plan: "monthly",
  closeMenu: () => set((state) => ({ isMenuOpen: (state.isMenuOpen = false) })),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  togglePlan: () =>
    set((state) => ({
      plan: state.plan === "monthly" ? "yearly" : "monthly",
    })),
}))

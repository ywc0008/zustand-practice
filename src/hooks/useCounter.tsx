import { create } from "zustand";

interface BearState {
  bears: number;
  increaseNumber: () => void;
  decreaseNumber: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

const useCounter = create<BearState>((set) => ({
  bears: 0,
  increaseNumber: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseNumber: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useCounter;

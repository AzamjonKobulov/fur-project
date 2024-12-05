"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuOpen: (open: boolean) => void;
}

// Create the Dropdown Context
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Provider Component Props
interface MenuProviderProps {
  children: ReactNode;
}

// Provider Component
export function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <MenuContext.Provider value={{ toggleMenu, isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

// Custom Hook for consuming the context
export function useMenu(): MenuContextProps {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

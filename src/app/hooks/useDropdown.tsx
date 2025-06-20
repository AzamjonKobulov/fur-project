import { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export function useDropdown(initialSelected = null, hasSelection = true) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    hasSelection ? initialSelected : null
  );
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false)); // Close on outside click

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (option) => {
    if (hasSelection) setSelected(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return {
    ref,
    isOpen,
    selected,
    toggleDropdown,
    selectOption,
  };
}

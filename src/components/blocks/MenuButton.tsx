import { useState } from "react";
import NavMenu from "./NavMenu";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(prev => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleClick} className="absolute top-1/2 left-20 max-sm:-left-6 flex flex-col gap-[0.2rem] cursor-pointer">
        <span className={`block bg-foreground/60 h-[0.2rem] w-7 max-sm:w-6 transition-all duration-300 ${isOpen && 'rotate-45 translate-y-1.5'}`}></span>
        <span className={`block bg-foreground/60 h-[0.2rem] w-7 max-sm:w-6 transition-all duration-300 ${isOpen && 'opacity-0'}`}></span>
        <span className={`block bg-foreground/60 h-[0.2rem] w-7 max-sm:w-6 transition-all duration-300 ${isOpen && '-rotate-45 -translate-y-1.5'}`}></span>
      </button>
      <NavMenu
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
    </>
  )
}
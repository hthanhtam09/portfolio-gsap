import React from "react";

const NavBar = ({
  isOpen,
  handleToggle,
}: {
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  return (
    <nav className="fixed w-full flex justify-between items-center p-6 text-[#cdc6be] mix-blend-difference z-10">
      <div>
        <p>Home</p>
      </div>
      <div>
        <p className="text-center text-3xl">
          <a href="/">Portfolio</a>
        </p>
      </div>
      <div className="flex justify-end">
        <button
          className={`relative burger ${isOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span className="block w-10 h-0.5 bg-[#cdc6be] absolute transform transition-all duration-250 ease-out -translate-y-0.5" />
          <span className="block w-10 h-0.5 bg-[#cdc6be] absolute transform transition-all duration-250 ease-out translate-y-0.5" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

import { capitalizeFirstLetter } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavBar = ({
  title,
  isOpen,
  handleToggle,
}: {
  title: string;
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const projectNameFromParams = params.get("name");
  if (projectNameFromParams != null && pathName === "/project") return;

  return (
    <nav className="fixed w-full flex justify-between items-center p-6 text-[#cdc6be] mix-blend-difference z-[9999]">
      <div>
        <p>{capitalizeFirstLetter(title)}</p>
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

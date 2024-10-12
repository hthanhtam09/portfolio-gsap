import React, { forwardRef } from "react";

const Overlay = forwardRef<
  HTMLDivElement,
  Readonly<{
    menuItemsRef: React.RefObject<HTMLDivElement>;
  }>
>(({ menuItemsRef }, ref) => {
  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full h-screen bg-[#141412] flex items-center justify-center -z-50 transition-opacity duration-500 ease-out`}
    >
      <div
        className="flex flex-col justify-between text-center text-[#cdc6be]"
        ref={menuItemsRef}
      >
        <div className="text-9xl">
          <a href="/" className="hover:tracking-wider transition-all">
            Home
          </a>
        </div>
        <div className="text-9xl">
          <a href="/overview" className="hover:tracking-wider transition-all">
            Overview
          </a>
        </div>
        <div className="text-9xl">
          <a href="/project" className="hover:tracking-wider transition-all">
            Project
          </a>
        </div>
        <div className="text-9xl">
          <a href="/contact" className="hover:tracking-wider transition-all">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
});

Overlay.displayName = "Overlay";

export default Overlay;

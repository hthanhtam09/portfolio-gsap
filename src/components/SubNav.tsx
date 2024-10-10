import React, { forwardRef } from "react";

const SubNav = forwardRef<HTMLDivElement, React.PropsWithChildren<object>>(
  (_, ref) => {
    return (
      <div
        ref={ref}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 text-[#cdc6be]"
      >
        <p className="text-xl">
          <a href="/">Facebook</a>
        </p>
        <p>.</p>
        <p className="text-xl">
          <a href="/">Instagram</a>
        </p>
        <p>.</p>
        <p className="text-xl">
          <a href="/">LinkedIn</a>
        </p>
        <p>.</p>
        <p className="text-xl">
          <a href="/">Github</a>
        </p>
      </div>
    );
  }
);

SubNav.displayName = "SubNav";

export default SubNav;

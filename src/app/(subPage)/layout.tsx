"use client";

import { AnimatePresence } from "framer-motion";
import { FirstMountProvider } from "./provider";
import NavBar from "@/components/Navbar";
import { useMenuAnimations } from "@/hooks/useAnimations";
import { useRef } from "react";
import Overlay from "@/components/Overlay";
import SubNav from "@/components/SubNav";
import { usePathname } from "next/navigation";

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const subNavRef = useRef<HTMLDivElement>(null);

  const { isOpen, handleToggle } = useMenuAnimations(
    overlayRef,
    menuItemsRef,
    subNavRef
  );

  return (
    <AnimatePresence mode="wait">
      <FirstMountProvider>
        <NavBar
          title={pathName.split("/")[1]}
          isOpen={isOpen}
          handleToggle={handleToggle}
        />
        {children}
        <Overlay ref={overlayRef} menuItemsRef={menuItemsRef} />
        <SubNav ref={subNavRef} />
      </FirstMountProvider>
    </AnimatePresence>
  );
}

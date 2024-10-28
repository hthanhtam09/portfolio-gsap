"use client";

import { AnimatePresence } from "framer-motion";
import { FirstMountProvider } from "./provider";
import NavBar from "@/components/Navbar";
import { useMenuAnimations } from "@/hooks/useAnimations";
import { useRef } from "react";
import Overlay from "@/components/Overlay";
import { usePathname } from "next/navigation";

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const { isOpen, handleToggle } = useMenuAnimations(overlayRef, menuItemsRef);

  return (
    <AnimatePresence mode="wait">
      <FirstMountProvider>
        <NavBar
          title={pathName.split("/")[1]}
          isOpen={isOpen}
          handleToggle={handleToggle}
        />
        {children}
        <Overlay isOpen={isOpen} ref={overlayRef} menuItemsRef={menuItemsRef} />
      </FirstMountProvider>
    </AnimatePresence>
  );
}

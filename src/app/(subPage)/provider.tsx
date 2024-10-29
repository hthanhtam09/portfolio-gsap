"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { createContext, useState, useEffect, useContext } from "react";

const FirstMountContext = createContext({
  isFirstMount: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsFirstMount: (value: React.SetStateAction<boolean>) => {},
});

export const useFirstMountSubPage = () => {
  const context = useContext(FirstMountContext);

  if (!context) {
    throw new Error("useFirstMount must be used within a FirstMountProvider");
  }

  return { ...context };
};

export function FirstMountProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isFirstMount) {
      timer = setTimeout(() => {
        setIsFirstMount(false);
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  const value = {
    isFirstMount,
    setIsFirstMount,
  };

  return (
    <FirstMountContext.Provider value={value}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </FirstMountContext.Provider>
  );
}

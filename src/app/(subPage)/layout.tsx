import { AnimatePresence } from "framer-motion";
import { FirstMountProvider } from "./provider";

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence mode="wait">
      <FirstMountProvider>{children}</FirstMountProvider>
    </AnimatePresence>
  );
}

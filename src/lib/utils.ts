import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const convertPathName = (pathName: string) => {
  if (!pathName.includes("-")) {
    return pathName;
  }
  return pathName.replace(/-/g, " ");
};

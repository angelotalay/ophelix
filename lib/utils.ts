import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMuxUrl(playbackId: string): string {
  console.log(`https://stream.mux.com/${playbackId}.m3u8`);
  return `https://stream.mux.com/${playbackId}.m3u8`;
}

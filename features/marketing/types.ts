import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BaseHeadlineCTAProps = {
  tag?: string | null;
  title: string;
  text: string;
  src?: string | StaticImport;
};

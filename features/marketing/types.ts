import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BaseHeadlineCTAProps = {
  tag: string | null;
  title: string | null;
  text: string | null;
  src: string | StaticImport | null;
};

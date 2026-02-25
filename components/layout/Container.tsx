import React, { HTMLAttributes } from "react";
import cslx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  minor: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Container({ children, className, minor, ...props }: ContainerProps) {
  return (
    <div
      className={cslx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        minor ? "py-6" : "py-12",
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;

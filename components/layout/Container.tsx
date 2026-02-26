import React, { HTMLAttributes } from "react";
import cslx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  minor?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Container({
  children,
  className,
  minor = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cslx(
        "w-full max-w-7xl px-4 sm:px-6 lg:px-12",
        minor ? "py-16" : "py-24",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;

import React, { HTMLAttributes } from "react";
import cslx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  minor?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Layout element that deals with center alignment and max-width
 */
function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cslx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;

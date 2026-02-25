"use client";

import React, { useState, useEffect } from "react";

function useReducedMotion() {
  const [state, setState] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const onChange: () => void = () => setState(mediaQuery.matches);
    onChange();

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return state;
}

export default useReducedMotion;

import { useEffect, useLayoutEffect } from "react";

/**
 * __Factory: useIsoLayoutEffect__
 */
export default function createUseIsoLayoutEffect(window?: unknown) {
  const useIsoLayoutEffect =
    typeof window === "undefined" ? useEffect : useLayoutEffect;

  return useIsoLayoutEffect;
}

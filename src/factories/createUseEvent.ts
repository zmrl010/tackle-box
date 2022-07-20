import { useCallback, useRef } from "react";

type Func<Arg, Result> = (...args: Arg[]) => Result;

interface UseEventDeps {
  useIsoLayoutEffect: (fn: () => void) => void;
}

const throwOnRender = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

/**
 * __Factory: useEvent__
 */
export default function createUseEvent({ useIsoLayoutEffect }: UseEventDeps) {
  return function useEvent<Arg, Result>(handler: Func<Arg, Result>) {
    const ref = useRef<typeof handler>(throwOnRender);

    useIsoLayoutEffect(() => {
      ref.current = handler;
    });

    return useCallback((...args: Arg[]): Result => {
      const fn = ref.current;
      return fn(...args);
    }, []);
  };
}

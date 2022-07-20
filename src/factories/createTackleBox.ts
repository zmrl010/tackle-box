import createUseEvent from "./createUseEvent";
import createUseIsoLayoutEffect from "./createUseIsoLayoutEffect";

export interface TackleBoxDependencies {
  window?: unknown | undefined;
}

/**
 * __Factory: TackleBox__
 *
 * Wraps up the entire library with any needed
 * dependencies and returns an object with all exports.
 */
export default function createTackleBox({ window }: TackleBoxDependencies) {
  const useIsoLayoutEffect = createUseIsoLayoutEffect(window);

  const useEvent = createUseEvent({ useIsoLayoutEffect });

  return {
    /**
     * Memoize a callback function that holds
     * the same function reference on every render.
     *
     * *Must be called outside of render,
     * usually while handling an event*
     *
     * @param handler - Callback event handler
     * @returns Referentially stable event handler
     */
    useEvent,
    /**
     * Isomorphic layout effect that falls back
     * to useEffect when server rendering
     */
    useIsoLayoutEffect,
  };
}

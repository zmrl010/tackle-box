import createUseElementSize from "./useElementSize/createUseElementSize";
import createUseEvent from "./useEvent/createUseEvent";
import createUseForkRef from "./useForkRef/createUseForkRef";
import createUseIsoLayoutEffect from "./useIsoLayoutEffect/createUseIsoLayoutEffect";

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

  const useForkRef = createUseForkRef();

  const useElementSize = createUseElementSize();

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
    /**
     * Create a function that will set both passed refs.
     *
     * Useful as a way to *merge* refs and pass a
     * single function to a child
     */
    useForkRef,
    /**
     * Automatically detect an elements' size
     *
     * This hook uses ResizeObserver to keep state
     * in sync with underlying DOM element
     */
    useElementSize,
  };
}

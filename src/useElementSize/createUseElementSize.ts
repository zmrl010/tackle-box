import { MutableRefObject, useState } from "react";
import { useIsoLayoutEffect, useEvent } from "../";

/**
 * Object representing an element's dimensions
 */
export interface ElementSize {
  /**
   * Measured element's inner height
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
   */
  clientHeight: number;
  /**
   * Measured element's inner width
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
   */
  clientWidth: number;
  /**
   * Measured element's outer height
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/offsetHeight
   */
  offsetHeight: number;
  /**
   * Measured element's outer width
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/offsetWidth
   */
  offsetWidth: number;
}

export default function createUseElementSize() {
  return function useElementSize<E extends HTMLElement>(
    ref: MutableRefObject<E | null>,
    onResize?: (size: ElementSize) => void
  ): ElementSize {
    const [size, setSize] = useState<ElementSize>({
      clientHeight: 0,
      clientWidth: 0,
      offsetHeight: 0,
      offsetWidth: 0,
    });

    const handleResize = useEvent(() => {
      if (!ref.current) {
        return;
      }
      const newSize = {
        clientHeight: ref.current.clientHeight,
        clientWidth: ref.current.clientWidth,
        offsetHeight: ref.current.offsetHeight,
        offsetWidth: ref.current.offsetWidth,
      };
      setSize(newSize);
      onResize?.(newSize);
    });

    useIsoLayoutEffect(() => {
      if (!ref.current) {
        return;
      }
      const observer = new ResizeObserver(() => {
        handleResize();
      });

      observer.observe(ref.current, { box: "border-box" });

      return () => {
        observer.disconnect();
      };
    }, [handleResize]);

    return size;
  };
}

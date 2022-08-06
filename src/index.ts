import createTackleBox from "./createTackleBox";

export const { useEvent, useIsoLayoutEffect, useForkRef, useElementSize } =
  createTackleBox({
    window,
  });

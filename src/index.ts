import createTackleBox from "./factories/createTackleBox";

const { useEvent, useIsoLayoutEffect } = createTackleBox({ window });

export { useEvent, useIsoLayoutEffect };

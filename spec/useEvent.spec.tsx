import { renderHook } from "@testing-library/react";
import { useEvent } from "../src";

describe("useEvent()", () => {
  it("should always return the same function", () => {
    const { result, rerender } = renderHook(useEvent, {
      initialProps: () => {},
    });
    const first = result.current;

    rerender(() => {});
    expect(result.current).toBe(first);

    rerender(() => {});
    expect(result.current).toBe(first);
  });
});

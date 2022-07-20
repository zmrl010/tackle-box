<h1 align="center">
  @zmrl/tackle-box
</h1>
<h4 align="center">
  My personal stash of React hooks.
</p>

## Install

Using your package manager of choice:

```shell
# npm
npm i @zmrl/tackle-box

# yarn
yarn add @zmrl/tackle-box

# pnpm
pnpm add @zmrl/tackle-box
```

## Hooks

### `useEvent`

> Memoize a callback function that holds the
> same function reference on every render.

Use it anywhere you need a stable event handler

```tsx
import { useEvent } from "@zmrl/tackle-box";

function App() {
  const stableFunction = useEvent(() => console.log("I am stable 🙂"));

  return <SomeMemoizedComponent doThing={stableFunction} />;
}
```

- This function is based on the upcoming react
  [RFC](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md).
  It isn't quite there yet but I need it right away.

### `useIsoLayoutEffect`

> Isomorphic layout effect that falls back
> to useEffect when server rendering

use it as you would useEffect or useLayoutEffect

```tsx
import { useIsoLayoutEffect } from "@zmrl/tackle-box";

function App() {
  useIsoLayoutEffect(() => {
    return subscribeToSomething()
  }, []);

  return <ChildrenComponents >
}
```

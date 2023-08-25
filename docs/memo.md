## Memo

Memo lets you skip re-evaluation a component when its props are unchanged:
```
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {

  // ...

});
```
Wrap a component in memo to get a memoized version of that component. This memoized version of your component will usually not be re-evaluated when its parent component is re-evaluated as long as its props have not changed.

**Usage**: Skipping re-evaluation when props are unchanged

## useMemo

useMemo is a React Hook that lets you cache the result of a calculation between re-evaluations:
```
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```
**Usage**: Skipping expensive recalculations 

To cache a calculation between re-renders, wrap it in a useMemo call at the top level of your component:
```
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.
In other words, useMemo caches a calculation result between re-renders until its dependencies change.

### Difference between memo and useMemo()

**React.memo()** and **React.useMemo()** are both used in React for performance optimization, but they serve different purposes.

- **React.memo()** is a higher-order component (HOC), which is a fancy name for a component that takes a component as a prop and returns a component that prevents a component from re-evaluation if the props (or values within it) have not changed.
It is used to memoize a component, which means it caches the output of the component and only re-evaluate it if its props have changed. This can be useful when a component's evaluation is expensive (component has a large children tree). Memo can be imported from 'react' and wrapped around a functional component.

- **useMemo()** is a hook that lets you cache the result of a calculation between re-renders. It takes a function and an array of dependencies as input and returns a cached value that will be re-used between renders as long as the dependencies do not change. This is useful when you have a computation that is expensive and needs to be run only when its dependencies change.

In summary, `memo is used for caching an entire component`, while `useMemo() is used for caching a specific calculation or value`. 

Memo caches a component's output based on its props, while useMemo() caches a value based on its dependencies.

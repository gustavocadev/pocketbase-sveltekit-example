import { writable } from 'svelte/store';

export const createCounter = (initialValue: number = 0) => {
  let { subscribe, update } = writable(initialValue);

  const increment = () => update((n) => n + 1);
  const incrementBy = (num: number) => update((n) => n + num);
  const decrement = () => update((n) => n - 1);

  return {
    subscribe,
    increment,
    decrement,
    incrementBy,
  };
};

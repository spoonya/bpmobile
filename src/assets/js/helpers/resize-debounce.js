import { debounce } from './debounce.js';

export function useResizeDebounce(func, delay) {
  const debouncedResize = debounce(() => {
    func();
  }, delay);

  window.addEventListener('resize', debouncedResize);

  return () => {
    window.removeEventListener('resize', debouncedResize);
  };
}

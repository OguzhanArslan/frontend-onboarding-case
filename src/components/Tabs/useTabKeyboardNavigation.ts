import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';

const NAVIGATION_KEYS = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];

export function useTabKeyboardNavigation() {
  return useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    const { key, currentTarget } = event;

    if (!NAVIGATION_KEYS.includes(key)) {
      return;
    }

    const tabs = Array.from(
      currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    );

    const currentIndex = tabs.findIndex(
      (tab) => tab === document.activeElement,
    );

    if (currentIndex === -1) {
      return;
    }

    event.preventDefault();

    let nextIndex = currentIndex;

    if (key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    }

    if (key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (key === 'Home') {
      nextIndex = 0;
    }

    if (key === 'End') {
      nextIndex = tabs.length - 1;
    }

    const nextTab = tabs[nextIndex];
    nextTab?.focus();
    nextTab?.click();
  }, []);
}

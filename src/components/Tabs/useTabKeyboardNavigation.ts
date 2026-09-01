import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';

const NAVIGATION_KEYS = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];

export function useTabKeyboardNavigation() {
  return useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (!NAVIGATION_KEYS.includes(event.key)) {
      return;
    }

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    );

    const currentIndex = tabs.findIndex(
      (tab) => tab === document.activeElement,
    );

    if (currentIndex === -1) {
      return;
    }

    event.preventDefault();

    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    }

    if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    }

    const nextTab = tabs[nextIndex];
    nextTab?.focus();
    nextTab?.click();
  }, []);
}

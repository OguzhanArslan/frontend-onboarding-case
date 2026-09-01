import { createContext, useCallback, useContext, useId, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

import Button, { type ButtonProps } from '@/components/Button/Button';

import styles from './Tabs.module.scss';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs.* components must be used within <Tabs.Root>.');
  }
  return context;
}

const ID_TYPE = {
  tab: 'tab',
  panel: 'panel',
} as const;

const tabId = (baseId: string, value: string) =>
  `${baseId}-${ID_TYPE.tab}-${value}`;
const panelId = (baseId: string, value: string) =>
  `${baseId}-${ID_TYPE.panel}-${value}`;

type RootProps = {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

function Root({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
}: RootProps) {
  const baseId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? '',
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  return (
    <TabsContext.Provider value={{ value, setValue, baseId }}>
      <div className={styles.root}>{children}</div>
    </TabsContext.Provider>
  );
}

function List({ children }: { children: ReactNode }) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) {
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
  };

  return (
    <div
      className={styles.list}
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

type ItemProps = { value: string } & Omit<ButtonProps, 'onClick' | 'active'>;

function Item({ value, ...buttonProps }: ItemProps) {
  const { value: activeValue, setValue, baseId } = useTabsContext();
  const selected = activeValue === value;

  return (
    <div className={styles.item}>
      <Button
        {...buttonProps}
        active={selected}
        onClick={() => setValue(value)}
        role="tab"
        id={tabId(baseId, value)}
        aria-selected={selected}
        aria-controls={panelId(baseId, value)}
        tabIndex={selected ? 0 : -1}
      />
    </div>
  );
}

type ContentProps = { value: string; children: ReactNode };

function Content({ value, children }: ContentProps) {
  const { value: activeValue, baseId } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      className={styles.content}
      role="tabpanel"
      id={panelId(baseId, value)}
      aria-labelledby={tabId(baseId, value)}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default { Root, List, Item, Content };

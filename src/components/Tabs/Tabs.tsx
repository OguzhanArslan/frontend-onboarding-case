import { useCallback, useId, useState } from 'react';
import type { ReactNode } from 'react';

import Button, { type ButtonProps } from '@/components/Button/Button';

import styles from './Tabs.module.scss';
import { TabsContext, useTabsContext } from './TabsContext';
import { ID_TYPE, getElementId } from './tabsIds';
import { useTabKeyboardNavigation } from './useTabKeyboardNavigation';

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
  const handleKeyDown = useTabKeyboardNavigation();

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
        id={getElementId({ baseId, type: ID_TYPE.tab, value })}
        aria-selected={selected}
        aria-controls={getElementId({ baseId, type: ID_TYPE.panel, value })}
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
      id={getElementId({ baseId, type: ID_TYPE.panel, value })}
      aria-labelledby={getElementId({ baseId, type: ID_TYPE.tab, value })}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default { Root, List, Item, Content };

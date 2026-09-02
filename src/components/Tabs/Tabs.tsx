import { useCallback, useId, useState } from 'react';
import type { ReactNode } from 'react';

import PillButton, { type PillButtonProps } from '@/components/PillButton';

import styles from './Tabs.module.scss';
import { TabsContext, useTabsContext } from './Tabs.context';
import { ID_TYPE, getElementId } from './Tabs.helpers';
import { useTabKeyboardNavigation } from './useTabKeyboardNavigation';

interface RootProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

function Root(props: RootProps) {
  const {
    children,
    defaultValue,
    value: controlledValue,
    onValueChange,
  } = props;

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

function List(props: { children: ReactNode }) {
  const { children } = props;
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

type TabProps = { value: string } & Omit<PillButtonProps, 'onClick' | 'active'>;

function Tab(props: TabProps) {
  const { value, ...buttonProps } = props;
  const { value: activeValue, setValue, baseId } = useTabsContext();
  const selected = activeValue === value;

  return (
    <div className={styles.tab}>
      <PillButton
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

function Panels(props: { children: ReactNode }) {
  const { children } = props;

  return <div className={styles.panels}>{children}</div>;
}

interface PanelProps {
  value: string;
  children: ReactNode;
}

function Panel(props: PanelProps) {
  const { value, children } = props;
  const { value: activeValue, baseId } = useTabsContext();
  const active = activeValue === value;

  return (
    <div
      className={styles.panel}
      role="tabpanel"
      id={getElementId({ baseId, type: ID_TYPE.panel, value })}
      aria-labelledby={getElementId({ baseId, type: ID_TYPE.tab, value })}
      data-active={active || undefined}
      tabIndex={active ? 0 : -1}
    >
      {children}
    </div>
  );
}

export default { Root, List, Tab, Panels, Panel };

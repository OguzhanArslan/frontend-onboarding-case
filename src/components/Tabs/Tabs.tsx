import { useCallback, useEffect, useId, useState } from 'react';
import type { ReactNode, TransitionEvent } from 'react';

import classNames from 'classnames';

import Button, { type ButtonProps } from '@/components/Button/Button';

import styles from './Tabs.module.scss';
import { TabsContext, useTabsContext } from './TabsContext';
import { ID_TYPE, getElementId } from './tabsIds';
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

type ItemProps = { value: string } & Omit<ButtonProps, 'onClick' | 'active'>;

function Item(props: ItemProps) {
  const { value, ...buttonProps } = props;
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

interface ContentProps {
  value: string;
  children: ReactNode;
}

function Content(props: ContentProps) {
  const { value, children } = props;
  const { baseId } = useTabsContext();
  const [visible, setVisible] = useState(true);
  const [rendered, setRendered] = useState<ContentProps>({ value, children });
  const { value: renderedValue, children: renderedChildren } = rendered;

  useEffect(() => {
    if (value !== renderedValue) {
      setVisible(false);
    }
  }, [value, renderedValue]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    const { target, currentTarget, propertyName } = event;

    if (target === currentTarget && propertyName === 'opacity' && !visible) {
      setRendered({ value, children });
      setVisible(true);
    }
  };

  return (
    <div
      className={styles.content}
      role="tabpanel"
      id={getElementId({ baseId, type: ID_TYPE.panel, value: renderedValue })}
      aria-labelledby={getElementId({
        baseId,
        type: ID_TYPE.tab,
        value: renderedValue,
      })}
      tabIndex={0}
    >
      <div
        className={classNames(styles.fade, { [styles.hidden]: !visible })}
        onTransitionEnd={handleTransitionEnd}
      >
        {renderedChildren}
      </div>
    </div>
  );
}

export default { Root, List, Item, Content };

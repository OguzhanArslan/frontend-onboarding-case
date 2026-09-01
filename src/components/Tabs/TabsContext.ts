import { createContext, useContext } from 'react';

export type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs.* components must be used within <Tabs.Root>.');
  }
  return context;
}

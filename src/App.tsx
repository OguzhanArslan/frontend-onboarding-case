import { useState } from 'react';

import Tabs from '@/components/Tabs/Tabs';
import { TABS, type TabValue } from '@/data/tabs';
import Banner from './components/Banner/Banner';

export function App() {
  const [activeTab, setActiveTab] = useState<TabValue>(TABS[0].value);
  const data = TABS.find((tab) => tab.value === activeTab) ?? TABS[0];
  const { label, title, description, imageSrc } = data;

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as TabValue)}
    >
      <Tabs.Content value={activeTab}>
        <Banner
          key={activeTab}
          label={label}
          title={title}
          description={description}
          imageSrc={imageSrc}
        />
      </Tabs.Content>

      <Tabs.List>
        {TABS.map(({ value, label, Icon }) => (
          <Tabs.Item key={value} value={value} text={label} prefix={<Icon />} />
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

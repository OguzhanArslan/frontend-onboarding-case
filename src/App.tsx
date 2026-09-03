import { useState } from 'react';

import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs';
import { TABS_DATA, type TabConfig, type TabValue } from '@/data/tabs';

export function App() {
  const [activeTab, setActiveTab] = useState<TabValue>(TABS_DATA[0].value);

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as TabValue)}
    >
      <Tabs.Panels>
        {TABS_DATA.map(
          ({
            value,
            label,
            title,
            description,
            imageSrc,
            stickers,
          }: TabConfig) => (
            <Tabs.Panel key={value} value={value}>
              <Banner
                label={label}
                title={title}
                description={description}
                imageSrc={imageSrc}
                stickers={stickers}
              />
            </Tabs.Panel>
          ),
        )}
      </Tabs.Panels>

      <Tabs.List>
        {TABS_DATA.map(({ value, label, Icon }) => (
          <Tabs.Tab key={value} value={value} text={label} prefix={<Icon />} />
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}

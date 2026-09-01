import { useState } from 'react';

import {
  AdvancedIcon,
  DocumentIcon,
  ScanIcon,
  ShareIcon,
  SignIcon,
} from '@/components/Icon/Icon';
import Tabs from '@/components/Tabs/Tabs';

export function App() {
  const [activeTab, setActiveTab] = useState('document');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    console.log('Active tab:', value);
  };

  return (
    <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
      <Tabs.Content value="document">Document Scanner</Tabs.Content>
      <Tabs.Content value="sign">Sign & Stamp</Tabs.Content>
      <Tabs.Content value="batch">Batch Scanning</Tabs.Content>
      <Tabs.Content value="advanced">Advanced Filters</Tabs.Content>
      <Tabs.Content value="export">Export & Share</Tabs.Content>

      <Tabs.List>
        <Tabs.Item
          value="document"
          text="Document Scanner"
          prefix={<DocumentIcon />}
        />
        <Tabs.Item value="sign" text="Sign & Stamp" prefix={<SignIcon />} />
        <Tabs.Item value="batch" text="Batch Scanning" prefix={<ScanIcon />} />
        <Tabs.Item
          value="advanced"
          text="Advanced Filters"
          prefix={<AdvancedIcon />}
        />
        <Tabs.Item
          value="export"
          text="Export & Share"
          prefix={<ShareIcon />}
        />
      </Tabs.List>
    </Tabs.Root>
  );
}

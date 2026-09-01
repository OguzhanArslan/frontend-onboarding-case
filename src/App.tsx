import { useState } from 'react';

import Button from '@/components/Button/Button';
import {
  AdvancedIcon,
  DocumentIcon,
  ScanIcon,
  ShareIcon,
  SignIcon,
} from '@/components/Icon/Icon';
import Tabs from './components/Tabs/Tabs';

export function App() {
  const [active, setActive] = useState(false);

  return (
    <Tabs.List>
      <Tabs.Item>
        <Button
          onClick={() => setActive((prev) => !prev)}
          text="Document Scanner"
          prefix={<DocumentIcon />}
          active={active}
        />
      </Tabs.Item>

      <Tabs.Item>
        <Button
          onClick={() => setActive((prev) => !prev)}
          text="Sign & Stamp"
          prefix={<SignIcon />}
          active={active}
        />
      </Tabs.Item>

      <Tabs.Item>
        <Button
          onClick={() => setActive((prev) => !prev)}
          text="Batch Scanning"
          prefix={<ScanIcon />}
          active={active}
        />
      </Tabs.Item>

      <Tabs.Item>
        <Button
          onClick={() => setActive((prev) => !prev)}
          text="Advanced Filters"
          prefix={<AdvancedIcon />}
          active={active}
        />
      </Tabs.Item>

      <Tabs.Item>
        <Button
          onClick={() => setActive((prev) => !prev)}
          text="Export & Share"
          prefix={<ShareIcon />}
          active={active}
        />
      </Tabs.Item>
    </Tabs.List>
  );
}

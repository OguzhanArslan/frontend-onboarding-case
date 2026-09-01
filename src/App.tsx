import { useState } from 'react';

import styles from '@/App.module.scss';
import Button from '@/components/Button/Button';
import { DocumentIcon } from '@/components/Icon/Icon';

export function App() {
  const [active, setActive] = useState(false);

  return (
    <main className={styles.main}>
      <Button
        onClick={() => setActive((prev) => !prev)}
        text="Document Scanner"
        prefix={<DocumentIcon />}
        active={active}
      />
    </main>
  );
}

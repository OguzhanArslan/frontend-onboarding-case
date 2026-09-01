import type { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  prefix?: ReactNode;
  /** Active/busy state: changes background and shows a loading spinner. */
  active?: boolean;
}

export default function Button({
  text,
  onClick,
  prefix,
  active = false,
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-active={active || undefined}
      aria-busy={active || undefined}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      {text}
    </button>
  );
}

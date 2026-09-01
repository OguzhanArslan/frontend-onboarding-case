import type { ReactNode } from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  text: string;
  onClick: () => void;
  prefix?: ReactNode;
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
      {prefix && (
        <span
          className={classNames(styles.prefix, {
            [styles.active]: active,
          })}
        >
          {prefix}
        </span>
      )}
      {text}
    </button>
  );
}

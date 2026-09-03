import type { ButtonHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './PillButton.module.scss';

export interface PillButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  text: string;
  prefix?: ReactNode;
  active?: boolean;
}

export default function PillButton(props: PillButtonProps) {
  const { text, prefix, active = false, className, ...rest } = props;

  return (
    <button
      type="button"
      {...rest}
      className={classNames(styles.pillbutton, className)}
      data-active={active || undefined}
      aria-busy={active || undefined}
    >
      {prefix && (
        <span
          className={classNames(styles.prefix, {
            [styles.active]: active,
          })}
        >
          <svg className={styles.ring} viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="27.5" />
          </svg>
          {prefix}
        </span>
      )}
      {text}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  text: string;
  prefix?: ReactNode;
  active?: boolean;
}

export default function Button({
  text,
  prefix,
  active = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={classNames(styles.button, className)}
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

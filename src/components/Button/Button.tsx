import type { ButtonHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <button
      type="button"
      {...rest}
      className={classNames(styles.button, className)}
    >
      {children}
    </button>
  );
}

import type { CSSProperties } from 'react';

import styles from './Stickers.module.scss';

export type StickerAnimation = 'fade' | 'pop' | 'slide-up';

export interface Sticker {
  src: string;
  alt?: string;
  width?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animation?: StickerAnimation;
  delay?: number;
}

interface StickersProps {
  items?: readonly Sticker[] | undefined;
}

export default function Stickers(props: StickersProps) {
  const { items } = props;

  if (!items?.length) {
    return null;
  }

  return (
    <>
      {items.map((sticker, index) => (
        <img
          key={index}
          src={sticker.src}
          alt={sticker.alt ?? ''}
          className={styles.sticker}
          data-anim={sticker.animation ?? 'pop'}
          style={
            {
              top: sticker.top,
              left: sticker.left,
              right: sticker.right,
              bottom: sticker.bottom,
              width: sticker.width,
              '--sticker-delay': `${sticker.delay ?? 0}s`,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}

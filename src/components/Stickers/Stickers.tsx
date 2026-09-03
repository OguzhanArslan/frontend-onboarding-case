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
      {items.map((sticker, index) => {
        const { animation, delay, src, alt, top, bottom, left, right, width } =
          sticker;

        return (
          <img
            key={index}
            src={src}
            alt={alt ?? ''}
            className={styles.sticker}
            data-anim={animation ?? 'pop'}
            style={
              {
                top,
                left,
                right,
                bottom,
                width,
                '--sticker-delay': `${delay ?? 0}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </>
  );
}

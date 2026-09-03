import type { ComponentType } from 'react';

import Screen1 from '@/assets/images/screen1/hero.png';
import Screen2 from '@/assets/images/screen2/hero.png';
import Screen2Completed from '@/assets/images/screen2/completed.png';
import Screen2Sign from '@/assets/images/screen2/sign.png';
import Screen3 from '@/assets/images/screen3/hero.png';
import Screen3Page from '@/assets/images/screen3/page.png';
import Screen4 from '@/assets/images/screen4/hero.png';
import Screen4Brightness from '@/assets/images/screen4/brightness.png';
import Screen4Contrast from '@/assets/images/screen4/contrast.png';
import Screen5 from '@/assets/images/screen5/hero.png';
import Screen5Ok from '@/assets/images/screen5/ok.png';
import Screen5Pdf from '@/assets/images/screen5/pdf.png';
import Screen5Jpg from '@/assets/images/screen5/jpg.png';
import Screen5Txt from '@/assets/images/screen5/txt.png';

import type { Sticker } from '@/components/Stickers';

import type { IconProps } from '@/components/Icon';
import {
  AdvancedIcon,
  DocumentIcon,
  ScanIcon,
  ShareIcon,
  SignIcon,
} from '@/components/Icon';

export interface TabConfig {
  value: string;
  label: string;
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
  imageSrc: string;
  stickers?: readonly Sticker[];
}

export const TABS_DATA = [
  {
    value: 'document',
    label: 'Document Scanner',
    Icon: DocumentIcon,
    title: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    imageSrc: Screen1,
  },
  {
    value: 'sign',
    label: 'Sign & Stamp',
    Icon: SignIcon,
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    imageSrc: Screen2,
    stickers: [
      {
        src: Screen2Sign,
        width: '36%',
        top: '58%',
        left: '6%',
        animation: 'pop',
        delay: 1.2,
      },
      {
        src: Screen2Completed,
        width: '35%',
        top: '40%',
        right: '4.5%',
        animation: 'pop',
        delay: 1.4,
      },
    ],
  },
  {
    value: 'batch',
    label: 'Batch Scanning',
    Icon: ScanIcon,
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    imageSrc: Screen3,
    stickers: [
      {
        src: Screen3Page,
        width: '40%',
        bottom: '6%',
        left: '33%',
        animation: 'slide-up',
        delay: 1.2,
      },
      {
        src: Screen3Page,
        width: '46%',
        bottom: '-5%',
        left: '29.2%',
        animation: 'slide-up',
        delay: 1.4,
      },
      {
        src: Screen3Page,
        width: '50%',
        bottom: '-13%',
        left: '27%',
        animation: 'slide-up',
        delay: 1.6,
      },
    ],
  },
  {
    value: 'advanced',
    label: 'Advanced Filters',
    Icon: AdvancedIcon,
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    imageSrc: Screen4,
    stickers: [
      {
        src: Screen4Brightness,
        width: '7%',
        top: '34%',
        left: '17%',
        animation: 'fade',
        delay: 1.1,
      },
      {
        src: Screen4Contrast,
        width: '7%',
        top: '34%',
        right: '14%',
        animation: 'fade',
        delay: 1.3,
      },
    ],
  },
  {
    value: 'export',
    label: 'Export & Share',
    Icon: ShareIcon,
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    imageSrc: Screen5,
    stickers: [
      {
        src: Screen5Ok,
        width: '4%',
        bottom: '5.7%',
        left: '16.8%',
        animation: 'slide-up',
        delay: 1.2,
      },
      {
        src: Screen5Pdf,
        width: '27%',
        bottom: '0.6%',
        left: '17.8%',
        animation: 'slide-up',
        delay: 1.4,
      },
      {
        src: Screen5Jpg,
        width: '21%',
        bottom: '8%',
        left: '41%',
        animation: 'slide-up',
        delay: 1.6,
      },
      {
        src: Screen5Txt,
        width: '26%',
        bottom: '0%',
        left: '62%',
        animation: 'slide-up',
        delay: 1.8,
      },
    ],
  },
] as const satisfies readonly TabConfig[];

export type TabValue = (typeof TABS_DATA)[number]['value'];

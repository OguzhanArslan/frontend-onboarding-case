import type { ComponentType } from 'react';

import Screen1 from '@/assets/images/screen1/hero.png';
import Screen2 from '@/assets/images/screen2/hero.png';
import Screen3 from '@/assets/images/screen3/hero.png';
import Screen4 from '@/assets/images/screen4/hero.png';
import Screen5 from '@/assets/images/screen5/hero.png';

import type { IconProps } from '@/components/Icon/Icon';
import {
  AdvancedIcon,
  DocumentIcon,
  ScanIcon,
  ShareIcon,
  SignIcon,
} from '@/components/Icon/Icon';

export interface TabConfig {
  value: string;
  label: string;
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
  imageSrc: string;
}

export const TABS = [
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
  },
  {
    value: 'batch',
    label: 'Batch Scanning',
    Icon: ScanIcon,
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    imageSrc: Screen3,
  },
  {
    value: 'advanced',
    label: 'Advanced Filters',
    Icon: AdvancedIcon,
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    imageSrc: Screen4,
  },
  {
    value: 'export',
    label: 'Export & Share',
    Icon: ShareIcon,
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    imageSrc: Screen5,
  },
] as const satisfies readonly TabConfig[];

export type TabValue = (typeof TABS)[number]['value'];

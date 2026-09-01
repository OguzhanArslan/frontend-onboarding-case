import type { ComponentType, FC, SVGProps } from 'react';

import { ReactComponent as AdvancedSvg } from '@/assets/icons/advanced.svg';
import { ReactComponent as DocumentSvg } from '@/assets/icons/document.svg';
import { ReactComponent as ScanSvg } from '@/assets/icons/scan.svg';
import { ReactComponent as ShareSvg } from '@/assets/icons/share.svg';
import { ReactComponent as SignSvg } from '@/assets/icons/sign.svg';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  title?: string;
}

type SvgComponent = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

function createIcon(Svg: SvgComponent, displayName: string): FC<IconProps> {
  const Icon: FC<IconProps> = ({ size = 32, ...rest }) => (
    <Svg
      width={size}
      height={size}
      focusable="false"
      aria-hidden={rest['aria-label'] || rest.title ? undefined : true}
      {...rest}
    />
  );

  Icon.displayName = displayName;

  return Icon;
}

export const AdvancedIcon = createIcon(AdvancedSvg, 'AdvancedIcon');
export const DocumentIcon = createIcon(DocumentSvg, 'DocumentIcon');
export const ScanIcon = createIcon(ScanSvg, 'ScanIcon');
export const ShareIcon = createIcon(ShareSvg, 'ShareIcon');
export const SignIcon = createIcon(SignSvg, 'SignIcon');

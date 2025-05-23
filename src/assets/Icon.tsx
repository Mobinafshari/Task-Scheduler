import { retryDynamicImport } from '@utils/retryDynamicImport';
import { Suspense, SVGProps } from 'react';

const icons = {
  Send: retryDynamicImport(() => import('@icons/send.svg?react')),
  Delete: retryDynamicImport(() => import('@icons/delete.svg?react')),
  Info: retryDynamicImport(() => import('@icons/Info.svg?react')),
};

type CustomIcon = {
  icon: keyof typeof icons;
  svgProps?: SVGProps<SVGSVGElement>;
};
const CustomIcon = ({ icon, svgProps }: CustomIcon) => {
  const Icon = icons[icon];
  return (
    <Suspense>
      <Icon {...svgProps} ref={null} />
    </Suspense>
  );
};

export default CustomIcon;

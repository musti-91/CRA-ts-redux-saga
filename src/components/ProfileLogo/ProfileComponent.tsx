import React, { memo } from 'react';

import { Wrapper, Image } from './ProfileComponent.style';
import { ReactComponent as Avatar } from 'assets/svg/nf-logo-positive.svg';

interface IProps {
  source?: string;
  alt?: string;
}

const CustomComponent: React.FC<IProps> = ({ source, alt }) => {
  return (
    <Wrapper>{source ? <Image src={source} alt={alt || 'not-provided'} /> : <Avatar />}</Wrapper>
  );
};

export default memo(CustomComponent);

import React, { memo } from 'react';

import { Wrap, Title } from './CustomComponent.style';

interface IProps {
  jobTitle: string;
  company: 'codeReview';
  textSize: number;
  backgroundColor: string;
}

const CustomComponent: React.FC<IProps> = ({
  jobTitle,
  company,
  textSize,
  backgroundColor,
}) => {
  return (
    <Wrap backgroundColor={backgroundColor}>
      <Title textSize={textSize}>Testing 1, 2, 3!</Title>
    </Wrap>
  );
};

export default memo(CustomComponent);

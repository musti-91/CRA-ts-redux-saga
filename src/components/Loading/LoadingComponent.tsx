import React, { FC } from 'react';
import { Wrapper } from './LoadingComponent.style';

interface Props {}

/**
 * @author
 * @function Loading
 **/
// Todo implement icons
const Loading: FC<Props> = props => {
  return (
    <Wrapper color={'lightblue'} width={80}>
      Loading...
    </Wrapper>
  );
};

export default Loading;

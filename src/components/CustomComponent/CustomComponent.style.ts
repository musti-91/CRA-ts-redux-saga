import styled from 'styled-components';

interface IWrapProps {
  backgroundColor: string;
}

export const Wrap = styled.div<IWrapProps>`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 32px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface ITitleProps {
  textSize: number;
}

export const Title = styled.h2<ITitleProps>`
  font-size: ${({ textSize }) => textSize}px;
  text-align: center;
  margin-bottom: 32px;
`;

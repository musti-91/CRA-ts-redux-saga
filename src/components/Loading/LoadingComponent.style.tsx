import styled from 'styled-components';

interface IWrapProps {
  width: number;
  color: string;
}

export const Wrapper = styled.div<IWrapProps>`
  width: ${({ width }) => width}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  width: 40%;
  max-width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
`;

interface ITitleProps {
  textSize: number;
}

export const Title = styled.h2<ITitleProps>`
  font-size: ${({ textSize }) => textSize}px;
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
`;

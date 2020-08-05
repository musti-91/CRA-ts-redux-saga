import styled from 'styled-components';

interface IWrapProps {
  width: number;
}

export const Wrapper = styled.div<IWrapProps>`
  width: ${({ width }) => width}%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  border: 0;
  outline: none;
  border-radius: 30px;
  padding: 10px 20px;
  color: #000;
  font-size: 20px;
  box-shadow: 0px 0px 12px 2px rgba(117, 117, 117, 1);
  ::placeholder {
    color: #ccc;
  }
`;

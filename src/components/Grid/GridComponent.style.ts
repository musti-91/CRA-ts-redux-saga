import styled from 'styled-components';
import heart from 'assets/svg/heart_icon.svg';
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 500px;
  overflow-y: auto;
`;

interface ICard {
  backgroundImage: string;
  heartColor: string;
}
export const Card = styled.div<ICard>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 30%;
  height: 300px;
  width: 300px;
  cursor: pointer;
  box-shadow: 0px 0px 12px 2px rgba(117, 117, 117, 1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;

  &::after {
    display: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75px;
    height: 75px;
    transform: translate(-32.5px, -32.5px);
    background-image: url(${heart});
    background-size: cover;
    background-repeat: no-repeat;
    fill: ${({ heartColor }) => heartColor};

    svg {
      fill: ${({ heartColor }) => heartColor};
      color: red;
    }
  }

  &:hover {
    opacity: 0.7;
  }
  &:hover::after {
    display: block;
  }
`;

import styled from 'styled-components';
import heart from 'assets/svg/heart_icon.svg';

export const Wrap = styled.div`
  width: 48%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: columns;
  flex-wrap: wrap;
  height: 400px;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  position: relative;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
  padding: 10px;

  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: translate(-20px, -20px);
    background-image: url(${heart});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px 100px;
  display: block;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Title = styled.div`
  h3 {
    font-size: 24px;
    color: #000;
  }
  a {
    color: #000;
    opacity: 0.8;
    font-size: 18px;
    text-decoration: none;
  }
`;

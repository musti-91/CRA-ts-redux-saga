import styled from 'styled-components';

interface ICover {
  image: string;
}
export const Wrap = styled.div<ICover>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;
// add keyframe for rotate logo
export const Logo = styled.div<ICover>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: #ccc;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  height: 100px;
`;
export const Controls = styled.div`
  width: 50%;
  display: flex;
  align-item: center;
`;

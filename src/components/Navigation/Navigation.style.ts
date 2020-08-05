import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.neutral02};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IcoLogo = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;
export const NavElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    opacity: 0.7;
  }
`;

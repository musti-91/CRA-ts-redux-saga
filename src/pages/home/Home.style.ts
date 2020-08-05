import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1000px;
  padding: 10px;
  height: auto;
  max-width: 1200px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 10px;
  h2 {
    width: 100%;
    text-align: left;
  }
`;
export const Columns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

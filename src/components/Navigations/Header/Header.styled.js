import styled from '@emotion/styled/macro';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.blue};
`;

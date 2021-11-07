import styled from '@emotion/styled/macro';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

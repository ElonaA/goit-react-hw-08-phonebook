import styled from '@emotion/styled/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleStyled = styled.h2`
  display: inline;
  margin: 10px 0;

  font-size: 1.5rem;

  color: ${props => props.theme.colors.blue};
  text-align: left;

  opacity: 1;
  transition: opacity 300ms ease;

  cursor: default;

  &:hover,
  &:focus {
    opacity: 0.8;
`;

export const Children = styled.div`
  padding: 15px;
`;

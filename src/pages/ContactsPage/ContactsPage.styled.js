import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Wrapper = styled.div`
  padding: 20px;
  margin-top: 50px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.contacts};
  -webkit-box-shadow: ${props => props.theme.colors.shadow};
  -moz-box-shadow: ${props => props.theme.colors.shadow};
  box-shadow: ${props => props.theme.colors.shadow};
  transition: box-shadow ${props => props.theme.animate.transition};
`;

export const Title = styled.h3`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.title};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

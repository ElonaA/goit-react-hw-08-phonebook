import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  width: 100%;
`;

export const Icon = styled.img`
  width: 250px;
  padding-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  color: ${props => props.theme.colors.white};
  padding-left: 40px;
  padding-right: 40px;
`;

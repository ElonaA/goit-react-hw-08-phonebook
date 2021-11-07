import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  width: 100%;
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

export const Button = styled.button`
  display: inline-flex;
  padding: 13px 35px;
  margin-top: 15px;
  border: 0;
  border-radius: 50px;
  font-size: ${props => props.theme.size.button};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.white};
  transition: background-color ${props => props.theme.animate.transition};
  outline: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blue};
    border: 2px solid ${props => props.theme.colors.blue};
  }
`;

export const Label = styled.label`
  margin: 0px;
  padding-bottom: 15px;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

export const Input = styled.input`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 30px;
  margin-top: 8px;
  margin-bottom: 10px;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  line-height: 1.4;
  border-radius: 30px;
  width: 93%;
  outline: none;
`;

export const Form = styled.form`
  width: 100%;
`;

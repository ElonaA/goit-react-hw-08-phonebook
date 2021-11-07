import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import {Container, TitleStyled} from './Title.styled';


const Title = ({ children }) => {
  const titleRef = createRef(null);

  return (
          <Container>
              <TitleStyled ref={titleRef}>
                  {children}
              </TitleStyled>
          </Container>
  );
};

Title.defaultProps = {
  children: [],
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
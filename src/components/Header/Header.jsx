// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { HeaderWrapper } from './Header.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title: 'Header'
};

/**
 * Header Component Description
 * @param {*} props 
 * @exmaple <Header title="Header Component" /> 
 */
const Header = (props) => {

   const { title } = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <HeaderWrapper data-testid="Header" title={title} theme={theme}>
         {props.children || title || 'Application'}
      </HeaderWrapper>
   )
};

// Props Validation
Header.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(Header);

// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { FooterWrapper } from './Footer.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'Footer Component'
};

/**
 * Footer Component Description
 * @param {*} props 
 * @exmaple <Footer title="Footer Component" /> 
 */
const Footer = ( props ) => {

   const {title} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <FooterWrapper data-testid="Footer" title={title} theme={theme}>
         Footer Component
      </FooterWrapper>
   )
};

// Props Validation
Footer.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(Footer);

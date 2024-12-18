// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { InputWrapper } from './Input.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'Input Component'
};

/**
 * Input Component Description
 * @param {*} props 
 * @exmaple <Input title="Input Component" /> 
 */
const Input = ( props ) => {

   const {title} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <InputWrapper data-testid="Input" title={title} theme={theme}>
         Input Component
      </InputWrapper>
   )
};

// Props Validation
Input.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(Input);

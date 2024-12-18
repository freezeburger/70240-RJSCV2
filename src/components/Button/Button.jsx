// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { ButtonWrapper } from './Button.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'Button Component',
   children:'Button Component',
   level:'primary',
   disabled:false,
};

/**
 * Button Component Description
 * @param {*} props 
 * @exmaple <Button title="Button Component" /> 
 */
const Button = ( props ) => {

   const {  
      title,
      children,
      onClick,
      level,
      disabled
   } = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   console.log(theme)

   return (
      <ButtonWrapper 
         data-testid="Button" 
         title={title} 
         theme={theme}
         level={level}
         onClick={onClick}
         disabled={disabled}
         >
         {children}
      </ButtonWrapper>
   )
};

// Props Validation
Button.propTypes = {
   title: PropTypes.string,
   children: PropTypes.string,
   onClick: PropTypes.func.isRequired,
   level: PropTypes.oneOf(['primary', 'secondary', 'danger']),
   disabled: PropTypes.bool
};

// Component Memoisation
export default React.memo(Button);

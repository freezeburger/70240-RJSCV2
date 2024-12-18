// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { TemplateNameWrapper } from './TemplateName.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'TemplateName Component'
};

/**
 * TemplateName Component Description
 * @param {*} props 
 * @exmaple <TemplateName title="TemplateName Component" /> 
 */
const TemplateName = ( props ) => {

   const {title} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <TemplateNameWrapper data-testid="TemplateName" title={title} theme={theme}>
         TemplateName Component
      </TemplateNameWrapper>
   )
};

// Props Validation
TemplateName.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(TemplateName);

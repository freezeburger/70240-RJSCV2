// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { TemplateNameWrapper } from './TemplateName.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';
import * as UI from "@/components";
import { styled } from '@mui/material';

// Default Props Values
const defaultProps = {
};

const TemplateName = ( props ) => {

   const theme = useContext(ThemeContext);

   return (
      <TemplateNameWrapper data-testid="TemplateName" theme={theme}>
         <UI.Header></UI.Header>
         <Main>
            {props.children}
         </Main>
         <UI.Footer></UI.Footer>
      </TemplateNameWrapper>
   )
};

const Main = styled.main`
/* Main section styles */
`   	

// Props Validation
TemplateName.propTypes = {
   children: PropTypes.any
};

/**
 * TemplateName Component Description
 * @param {*} props 
 * @exmaple <TemplateName title="TemplateName Component" /> 
 */
export default TemplateName;

// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { AppWrapper } from './App.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';
import * as UI from "@/components";
import styled from '@emotion/styled';

// Default Props Values
const defaultProps = {
};

const App = ( props ) => {

   const theme = useContext(ThemeContext);

   return (
      <AppWrapper data-testid="App" theme={theme}>
         <UI.Header></UI.Header>
         <Main>
            {props.children}
         </Main>
         <UI.Footer></UI.Footer>
      </AppWrapper>
   )
};

const Main = styled.main`
/* Main section styles */
`   	

// Props Validation
App.propTypes = {
   children: PropTypes.any
};

/**
 * App Component Description
 * @param {*} props 
 * @exmaple <App title="App Component" /> 
 */
export default App;

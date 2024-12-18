// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { ListWrapper } from './List.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'List Component'
};

/**
 * List Component Description
 * @param {*} props 
 * @exmaple <List title="List Component" /> 
 */
const List = ( props ) => {

   const {title} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <ListWrapper data-testid="List" title={title} theme={theme}>
         List Component
      </ListWrapper>
   )
};

// Props Validation
List.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(List);

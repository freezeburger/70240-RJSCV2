// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { ImageWrapper } from './Image.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'Image Component'
};

/**
 * Image Component Description
 * @param {*} props 
 * @exmaple <Image title="Image Component" /> 
 */
const Image = ( props ) => {

   const {title} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <ImageWrapper data-testid="Image" title={title} theme={theme}>
         Image Component
      </ImageWrapper>
   )
};

// Props Validation
Image.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
export default React.memo(Image);

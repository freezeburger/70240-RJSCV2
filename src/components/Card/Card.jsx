// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { CardWrapper } from './Card.mui';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'Card Component'
};

/**
 * Card Component Description title, children, imageUrl, subheader, avatar
 * @param {string} title 
 * @param {*} children 
 * @param {string} imageUrl 
 * @param {string} subheader 
 * @param {string} avatar 
 * @param {function} onShare 
 * @param {function} onLike 
 * @example <Card title="Card Component" /> 
 */
const Card = ( props ) => {

   const {title, children, imageUrl, subheader, avatar, onShare, onLike} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   return (
      <CardWrapper 
         data-testid="Card" 
         title={title} 
         theme={theme}
         imageUrl={imageUrl}
         subheader={subheader}
         avatar={avatar}
         onShare={onShare}
         onLike={onLike}
         >
         {children}
      </CardWrapper>
   )
};

// Props Validation
Card.propTypes = {
   title: PropTypes.string
};

// Component Memoisation
/**
 * Card Component Description title, children, imageUrl, subheader, avatar
 * @param {string} title 
 * @param {*} children 
 * @param {string} imageUrl 
 * @param {string} subheader 
 * @param {string} avatar 
 * @param {function} onShare 
 * @param {function} onLike 
 * @example <Card title="Card Component" /> 
 */
export default React.memo(Card);

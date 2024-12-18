// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { TextToSpeechWrapper } from './TextToSpeech.styled';

// Application Level Imports
import { ThemeContext } from '@/core/contexts';

// Default Props Values
const defaultProps = {
   title:'TextToSpeech Component'
};

/**
 * TextToSpeech Component Description
 * @param {*} props 
 * @exmaple <TextToSpeech title="TextToSpeech Component" /> 
 */
const TextToSpeech = ( props ) => {

   const {title, children} = { ...defaultProps, ...props };

   const theme = useContext(ThemeContext);

   const speak = useSpeechSynthesis();

   return (
      <TextToSpeechWrapper 
         data-testid="TextToSpeech" 
         title={title} 
         theme={theme}
         onMouseOver={() => speak(children)}>
         {children}
      </TextToSpeechWrapper>
   )
};

// Props Validation
TextToSpeech.propTypes = {
   title: PropTypes.string
};

 
 const useSpeechSynthesis = () => {
   
   const speak = useCallback((text) => {
     const synth = window.speechSynthesis
     const utterThis = new SpeechSynthesisUtterance(text)
     synth.speak(utterThis)
   },[])
 
   return speak;
 }

// Component Memoisation
export default React.memo(TextToSpeech);

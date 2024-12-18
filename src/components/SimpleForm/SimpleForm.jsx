// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { SimpleFormWrapper } from './SimpleForm.styled';
import { ThemeContext } from '@/core/contexts';
import { useInputHandler } from './useInputHandler.hook';

// Default Props Values
const defaultProps = {
    title: 'SimpleForm Component'
};

/**
 * SimpleForm Component Description
 * @param {*} props 
 * @exmaple <SimpleForm title="SimpleForm Component" /> 
 */
const SimpleForm = (props) => {

    const { title, initialValue, onChange } = { ...defaultProps, ...props };

    const theme = useContext(ThemeContext);

    const handleChange = useInputHandler(onChange);

    return (
        <SimpleFormWrapper 
            data-testid="SimpleForm" 
            title={title} 
            theme={theme} 
            value={initialValue} 
            onChange={handleChange} >
        </SimpleFormWrapper>
    )
};



// Props Validation
SimpleForm.propTypes = {
    title: PropTypes.string
};

/**
 * SimpleForm Component Description
 * @param {string} initialValue 
 * @param {function} onChange - initialValue mutator
 * @example <SimpleForm title="SimpleForm Component" /> 
 */
export default React.memo(SimpleForm);
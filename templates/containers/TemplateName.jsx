// External Dependencies
import PropTypes from 'prop-types';

// Application Level Imports
import  * as UI from "@/components";

// Local Dependencies
import { useTemplateNameLogic } from './TemplateName.hook';

// Default Props Values
const defaultProps = {
};


const TemplateName = ( props ) => {

   const logic = useTemplateNameLogic(/* false to prevent initial loading */);

   return (
      <>
         <h1>Actions</h1>
         <UI.Button onClick={logic.read}>Load Data</UI.Button>
         <hr />
         <h1>Data Visualisation</h1>
         { logic.data }
      </>
   )
};

// Props Validation
TemplateName.propTypes = {
   title: PropTypes.string
};

/**
 * TemplateName Component Description
 * @param {*} props 
 * @exmaple <TemplateName /> 
 */
export default TemplateName;

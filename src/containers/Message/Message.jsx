// External Dependencies
import PropTypes from 'prop-types';

// Application Level Imports
import * as UI from "@/components";

// Local Dependencies
import { useMessageLogic } from './Message.hook';

// Default Props Values
const defaultProps = {
};


const Message = (props) => {

   const logic = useMessageLogic(/* false to prevent initial loading */);

   return (
      <>
         <h1>Actions</h1>
         <UI.Button onClick={logic.read}>Load Data</UI.Button>
         <hr />
         <h1>Data Visualisation</h1>
         {
            logic.data.map((item, index) => (
               <li key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
               </li>
            ))
         }
      </>
   )
};

// Props Validation
Message.propTypes = {
   title: PropTypes.string
};

/**
 * Message Component Description
 * @param {*} props 
 * @exmaple <Message /> 
 */
export default Message;

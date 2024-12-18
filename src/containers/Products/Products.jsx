// External Dependencies
import PropTypes from 'prop-types';

// Application Level Imports
import  * as UI from "@/components";

// Local Dependencies
import { useProductsLogic } from './Products.hook';

// Default Props Values
const defaultProps = {
};


const Products = ( props ) => {

   const logic = useProductsLogic(/* false to prevent initial loading */);

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
Products.propTypes = {
   title: PropTypes.string
};

/**
 * Products Component Description
 * @param {*} props 
 * @exmaple <Products /> 
 */
export default Products;

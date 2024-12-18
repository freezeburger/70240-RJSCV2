// External Dependencies
import React from 'react';

// Application Level Imports
import * as Layouts from "@/layouts";
import * as Containers from "@/containers";

const Home = () => {

   return (
      <>
         {
            /* 
            <Layouts.LayoutHome>
               <Containers.FeatureName></Containers.FeatureName>
            </Layouts.LayoutHome> 
            */
         }
         <Layouts.LayoutApp>
            <Containers.Products />
            <Containers.Message />
         </Layouts.LayoutApp>
      </>
   )
};


/**
 * Home Component Description
 * @param {*} props 
 * @exmaple <Home title="Home Component" /> 
 */
export default Home;

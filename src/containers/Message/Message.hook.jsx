// External Dependencies
import React, { useEffect } from "react";

// Application Level Imports
import { useApi } from "@/hooks/useApi.hook";


export const useMessageLogic = (initialize = false) => {

   const api = useApi('messages');

    useEffect(() => {
        if(initialize)api.read();
    }, []);

  const [localState, setLocalState] = React.useState(api.data);

  return {
    localState,
    setLocalState,
    ...api
  };
}
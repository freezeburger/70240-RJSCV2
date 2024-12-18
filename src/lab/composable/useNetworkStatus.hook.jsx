// useNetworkStatus.hook.jsx

import { useState } from "react";
import { useGlobalEvent } from "./useGlobalEVent.hook";

/**
 * Captures the network status of the user
 * And returns a boolean value of the network status
 */
export const useNetworkStatus = () => {

    const [status, setStatus] = useState(navigator.onLine);

    useGlobalEvent('online', () => setStatus(true));
    useGlobalEvent('offline', () => setStatus(false));

    return status;
}
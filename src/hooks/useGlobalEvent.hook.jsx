import { useCallback, useEffect } from "react";

/**
 * Provides a way to listen to global events
 * @param {string} eventName 
 * @param {function} handler 
 * 
 * @example
 * useGlobalEvent('click', event => console.log('clicked', event));
 */
export const useGlobalEvent = (eventName, handler) => {
    if (!eventName || !handler) throw Error('Please provide event name and handler');

    const cleanup = useCallback(() => {
        window.removeEventListener(eventName, handler);
    }, [eventName, handler])

    const initialize = () => {
        window.addEventListener(eventName, handler);
        return cleanup;
    }

    useEffect(initialize, [eventName, handler]);
}
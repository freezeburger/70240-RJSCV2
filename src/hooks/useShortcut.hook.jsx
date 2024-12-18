// useShortcut.hook.jsx

import { useGlobalEvent } from "./useGlobalEvent.hook";

export const useShortcut = (key,  handler, modifier) => {

    const handleEvent = (event) => {

        if ( event[`${modifier}Key`] === true && event.key === key) {
            handler(event);
        }
    }

    useGlobalEvent('keydown', handleEvent);
}   
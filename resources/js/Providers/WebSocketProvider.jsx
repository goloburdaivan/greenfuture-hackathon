import React, { createContext, useContext, useEffect, useState } from 'react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const WebSocketContext = createContext();

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};

export const WebSocketProvider = ({ school, children }) => {
    const [device, setDevice] = useState({});
    console.log(device);

    useEffect(() => {
        window.Echo = new Echo({
            broadcaster: "pusher",
            key: "c90ab2b9c71319aa4f0f",
            cluster: 'eu',
            forceTLS: true,
        });

        window.Echo.channel(`school.${school.id}.updated-consumption`)
            .listen('.device-consumption-updated', (event) => {
                setDevice(event);
            });

        return () => {
            window.Echo.disconnect();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ device }}>
            {children}
        </WebSocketContext.Provider>
    );
};

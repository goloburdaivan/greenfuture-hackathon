import React from 'react';
import Device from '../Device/Device';

export default function Room({ room }) {
    return (
        <div className="relative w-full h-64 border-4 border-black p-4 flex flex-wrap justify-around items-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white px-2 text-lg font-bold">
                {room.room_number}
            </div>

            {room.devices.map(device => (
                <Device key={device.id} device={device} />
            ))}
        </div>
    );
}
